package _023

import "testing"

func TestExtractDigits(t *testing.T) {
	var tests = []struct {
		s    string
		want int
	}{
		{"1abc2", 12},
		{"pqr3stu8vwx", 38},
		{"a1b2c3de5f", 15},
		{"treb7uchet", 77},
	}

	for _, tt := range tests {
		testname := fmt.Sprintf("%s", tt.s)
		t.Run(testname, func(t *testing.T) {
			ans := extractDigits(tt.s)
			if ans != tt.want {
				t.Errorf("got %d, want %d", ans, tt.want)
			}
		})
	}
}
