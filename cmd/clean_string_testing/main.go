package clean_string_testing

import (
	"strings"
	"unicode/utf8"
)

func main() {

}

// cleanString removes all non UTF8, spaces, and null termination
// characters from s.
func cleanString(s string) string {
	if !utf8.ValidString(s) {
		v := make([]rune, 0, len(s))
		for i, r := range s {
			if r == utf8.RuneError {
				_, size := utf8.DecodeRuneInString(s[i:])
				if size == 1 {
					continue
				}
			}
			v = append(v, r)
		}
		s = string(v)
	}

	s = strings.Replace(s, " ", "", -1)

	return strings.Replace(s, "\x00", "", -1)
}
