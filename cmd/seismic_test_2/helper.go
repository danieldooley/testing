package main


func minInt32(a, b int32) int32{
	if a < b {
		return a
	} else {
		return b
	}
}

func maxInt32(a, b int32) int32 {
	if a > b {
		return a
	} else {
		return b
	}
}

func scaleF(n, min, max int32) float32 {
	if n < 0 {
		n = -n
	}
	return (float32(n - min)/float32(max - min))
}