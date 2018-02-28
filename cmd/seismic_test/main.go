package main

/*
slink-ws connects to a SEEDLink server and saves records to a postgres DB.
*/

import (
	"encoding/json"
	"github.com/GeoNet/kit/mseed"
	"github.com/GeoNet/kit/slink"
	"github.com/googollee/go-socket.io"
	"log"
	"net/http"
	"os"
	"time"
)

var cache [][]byte

func main() {

	server, err := socketio.NewServer(nil)
	if err != nil {
		log.Fatal(err)
	}

	cache = make([][]byte,0,0)

	server.On("connection", func(so socketio.Socket) {
		log.Println("Connection from " + so.Id())
		so.Join("all")
		so.On("disconnection", func() {
			log.Println(so.Id() + " Disconnected")
		})
		for _, c := range cache {
			so.Emit("record", string(c))
		}
	})
	server.On("error", func(so socketio.Socket, err error) {
		log.Println("ERROR:", err)
	})
	http.Handle("/socket.io/", server)

	http.Handle("/", http.FileServer(http.Dir("./www")))

	go http.ListenAndServe(":8080", nil)
	//err := a.initDB()
	//if err != nil {
	//	log.Fatal(err)
	//}
	//defer a.close()

	//// buffered chan to allow for DB back pressure.
	//// Allows ~ 10-12 minutes of records.
	//process := make(chan []byte, 200000)
	//
	///// run as many consumers for process as there are connections in the DB pool.
	//for i := 0; i <= a.maxOpen; i++ {
	//	go a.save(process)
	//}

	// TODO request old data?

	slconn := slink.NewSLCD()
	defer slink.FreeSLCD(slconn)

	beginTime := time.Now().Add(-10 * time.Minute)

	slconn.SetNetDly(30)
	slconn.SetNetTo(300)
	slconn.SetKeepAlive(0)

	slconn.SetBeginTime(beginTime.UTC().Format("2006,01,02,15,04,05"))

	slconn.SetSLAddr(os.Getenv("SLINK_HOST"))
	defer slconn.Disconnect()

	slconn.ParseStreamList("NZ_POTS", "")

	log.Println("listening for packets from seedlink")

	last := time.Now()

	// additional logic in recv loop handles cases where the connection to
	// SEEDLink is hung or a corrupt packet is received.  In these
	// cases the program exits and the service should restart it.

	first := true
recv:
	for {
		if time.Now().Sub(last) > 300.0*time.Second {
			log.Print("ERROR: no packets for 300s connection may be hung, exiting")
			break recv
		}

		// collect packets, blocking connection.
		switch p, rc := slconn.Collect(); rc {
		case slink.SLTERMINATE:
			log.Println("ERROR: slink terminate signal")
			break recv
		case slink.SLNOPACKET:
			// blocking connection so should never hit this option.
			time.Sleep(5 * time.Millisecond)
			continue recv
		case slink.SLPACKET:
			if p != nil && p.PacketType() == slink.SLDATA {
				msr := mseed.NewMSRecord()

				b := p.GetMSRecord()

				err := msr.Unpack(b, 512, 0, 0)
				if err != nil {
					log.Printf("unpacking miniSEED record: %s", err.Error())
					mseed.FreeMSRecord(msr)
					continue
				}

				//data, err := msr.DataSamples()
				//if err != nil {
				//	log.Println("ERROR Retrieving Data: ", err)
				//	continue
				//}

				r := record{
					Network:      msr.Network(),
					Station:      msr.Station(),
					Channel:      msr.Channel(),
					Location:     msr.Location(),
					Start:        msr.Starttime(),
					Latency_tx:   time.Now().UTC().Sub(msr.Endtime()).Seconds(),
					Latency_data: time.Now().UTC().Sub(msr.Starttime()).Seconds(),
					Raw:          b,
				}


				jsonRecord, err := json.Marshal(&r)
				if err != nil {
					log.Println("ERROR Marshalling Record: ", err)
					continue
				}

				if first {
					log.Println(string(jsonRecord))
					first = false
				}

				cache = append(cache, jsonRecord)
				if len(cache) > 50 {
					cache = cache[1:]
				}

				log.Printf("Broadcasting: %s.%s.%s.%s", r.Network, r.Station, r.Location, r.Channel)
				server.BroadcastTo("all", "record", string(jsonRecord))

				mseed.FreeMSRecord(msr)

				//case process <- p.GetMSRecord():
				//	metrics.MsgRx()
				//default:
				//	log.Fatal("process chan full, exiting")
				//}
			}
			last = time.Now()
		default:
			// bad packet.  Exit and allow the service to restart.
			log.Println("ERROR: invalid packet")
			break recv
		}
	}

	log.Println("ERROR: unexpected exit")
}
