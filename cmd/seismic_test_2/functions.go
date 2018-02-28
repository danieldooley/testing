package main

import (
	"fmt"
	"github.com/GeoNet/kit/mseed"
	"github.com/cryptix/wav"
	"io/ioutil"
	"net/http"
	"time"
	"math"
)

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
	url := fmt.Sprintf("http://service.geonet.org.nz/fdsnws/dataselect/1/query?station=%s&location=%s&channel=%s&starttime=%s&endtime=%s", station, location, channel, starttime.Format("2006-01-02T15:04:05-0700"), endttime.Format("2006-01-02T15:04:05-0700"))

	//Debug
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

func toAudio(r record) ([]byte, error) {
	data := make([]int32, len(r.Data))
	var mean int32 = 0

	for _, d := range r.Data {
		mean += d
	}
	mean /= int32(len(r.Data))

	var min int32 = 0
	var max int32 = 0

	for i, d := range r.Data {
		data[i] = d - mean
		min = minInt32(data[i], min)
		max = maxInt32(data[i], max)
	}

	//Scale the absolute values in the range of 0 to 1
	scaled := make([]float32, len(r.Data))

	fmt.Println(min, max)

	for i, d := range data {
		scaled[i] = scaleF(d, min, max)
	}

	f := wav.File{
		SampleRate:      rate,
		SignificantBits: bits,
		Channels:        1,
	}

	temp, err := ioutil.TempFile(".", "tempwave")
	if err != nil{
		return nil, err
	}

	fmt.Println(f)

	w, err := f.NewWriter(temp)
	if err != nil {
		return nil, err
	}
	defer w.Close()

	for _, d := range scaled {

		for x := 0; x < 1000; x++ {
			y := int32(0.8 * (float64(d) / float64(max)) * math.Pow(2, bits-1) * math.Sin(float64(x) * (math.Pi * 2) / 10))
			err := w.WriteInt32(y)
			if err != nil {
				return nil, err
			}
		}

	}

	return []byte{}, nil
}
