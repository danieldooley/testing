package tiles

import (
	"testing"
	"time"
)

func TestTileCreation(t *testing.T){


	_, err := GenerateTileset(time.Date(2016, 9, 20, 11, 5, 0,0,time.UTC), "MQZ", "10", "?H?")
	if err != nil {
		t.Fatal(err)
	}


}