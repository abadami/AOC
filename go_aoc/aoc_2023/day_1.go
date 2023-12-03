package aoc_2023

import (
	"fmt"
	"strings"
	"testing"
)

func Day1_part1() {
	println("Hello from day_1")
}

func extractNumber(s string) int {
	firstDigitCharIndex := strings.IndexAny(s, "1234567890")
	lastDigitCharIndex := strings.LastIndexAny(s, "1234567890")

	//firstDigitChar := s[firstDigitCharIndex]
	//lastDigitChar := s[lastDigitCharIndex]

	//firstDigit := utf8.DecodeRune(firstDigitChar)

	return 0
}

func TestExtractNumber(t *testing.T) {
	var tests = []struct {
		s    string
		want int
	}{
		{"1abc2", 12},
		{"pqr3stu8vwx", 38},
		{"a1b2c3d4e5f", 15},
		{"treb7uchet", 77},
	}

	for _, tt := range tests {
		testname := fmt.Sprintf("%s", tt.s)
		t.Run(testname, func(t *testing.T) {
			ans := extractNumber(tt.s)
			if ans != tt.want {
				t.Errorf("got %d, want %d", ans, tt.want)
			}
		})
	}

}
