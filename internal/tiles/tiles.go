package tiles

import (
	"time"
	"fmt"
	"net/http"
	"io/ioutil"
	"github.com/GeoNet/kit/mseed"
)

const (
	apiurl = "beta-service.geonet.org.nz"
	timefmt = "2006-01-02T15:04:05.000"
)

type SeismicTileSet struct {

}


type record struct {
	Network, Station, Channel, Location string
	Start, End                          time.Time
	Data                                []int32
	Raw                                 []byte
}

const (
	rate = 8000
	bits = 32
)

func requestFDSN(station, location, channel string, starttime, endttime time.Time) ([]byte, error) {
	url := fmt.Sprintf("https://%s/fdsnws/dataselect/1/query?station=%s&location=%s&channel=%s&starttime=%s&endtime=%s", apiurl, station, location, channel, starttime.Format(timefmt), endttime.Format(timefmt))

	fmt.Println(url)

	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}

	bytes, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	fmt.Println(len(bytes))

	return bytes, nil
}

func toRecord(bytes []byte) (record, error) {
	r := record{}
	msr := mseed.NewMSRecord()

	err := msr.Unpack(bytes, 512, 1, 0)
	if err != nil {
		return r, err
	}

	data, err := msr.DataSamples()
	if err != nil {
		return r, err
	}

	r = record{
		Network:  msr.Network(),
		Station:  msr.Station(),
		Channel:  msr.Channel(),
		Location: msr.Location(),
		Start:    msr.Starttime(),
		End:      msr.Endtime(),
		Data:     data,
		Raw:      bytes,
	}

	return r, nil
}

func getRecord(station, location, channel string, starttime, endttime time.Time) (record, error) {
	r := record{}
	bytes, err := requestFDSN(station, location, channel, starttime, endttime)
	if err != nil {
		return r, err
	}

	r, err = toRecord(bytes)
	if err != nil {
		return r, err
	}

	return r, nil
}


//Generates the tileset for a specified 5 minute period
func GenerateTileset(intime time.Time, station, location, channel string) (*SeismicTileSet, error) {
	var out SeismicTileSet

	//Debug
	fmt.Printf("%s.%s.%s\n", station, location, channel)

	r, err := getRecord(station, location, channel, intime, intime.Add(time.Minute * 5)) //TODO - Cull intime to round 5 minutes
	if err != nil {
		return nil, err
	}

	//Debug
	fmt.Printf("%s.%s.%s.%s\n", r.Network, r.Station, r.Location, r.Channel)
	fmt.Printf("%s - %s\n", r.Start.Format(timefmt), r.End.Format(timefmt))
	fmt.Println(len(r.Data))

	count := 0
	for _, d := range r.Data {
		if count++; count > 100 {
			break
		}
		fmt.Println(d)
	}

	return &out, nil
}