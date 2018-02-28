package main

import (
	"log"
)

func main() {

	log.Printf("Testing newline")
	log.Printf("Testing newline")
	log.Printf("Testing newline")

	s := "testing"
	log.Fatal("Test: ", s)
}
