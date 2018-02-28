package main

import (
	"io/ioutil"
	"bytes"
	"compress/gzip"
)

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

func main() {

	var b bytes.Buffer

	writer := gzip.NewWriter(&b)

	writer.Write([]byte(lorem))

	writer.Close()

	_ = ioutil.WriteFile("lorem.txt.gz", b.Bytes(), 0666)
}


