package main

import (
	"testing"
	"time"
	"log"
	"fmt"
)

/*
http://service.geonet.org.nz/fdsnws/dataselect/1/query?station=TDHS&location=20&channel=?N?&starttime=2016-09-01T16:37:00.000&endtime=2016-09-01T16:42:00.000
*/

func TestGetAudio(t *testing.T){

	loc, err := time.LoadLocation("")
	if err != nil {
		log.Fatal(err)
	}

	r, err := getRecord("MQZ", "10", "?H?", time.Date(2016, 9, 1, 16,37, 0, 0, loc), time.Date(2016, 9, 1, 16, 42, 0, 0, loc))
	if err != nil {
		log.Fatal(err)
	}

	fmt.Printf("%s.%s.%s.%s\n", r.Network, r.Station, r.Location, r.Channel)
	fmt.Println("Records: ", len(r.Data))

	b, err := toAudio(r)

	fmt.Println(len(b))
}
