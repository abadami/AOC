package _015

import (
	"fmt"
	"testing"
)

func TestDayTwoPartOne2015(t *testing.T) {
	var tests = []struct {
		s    string
		wrappingPaper int
		ribbon int
	}{
		{`2x3x4
1x1x10`,	58 + 43, 2 + 2 + 3 + 3 + (2 * 3 * 4) + 1 + 1 + 1 + 1 + (1 * 1 * 10)},
	}

	for _, tt := range tests {
		testname := tt.s
		t.Run(testname, func(t *testing.T) {
			wrapping, ribbon := DayTwoBoth2015(testname)
			if wrapping != tt.wrappingPaper {
				t.Errorf("got wrapping %d, want %d", wrapping, tt.wrappingPaper)
			}

			if ribbon != tt.ribbon {
				t.Errorf("got ribbon %d, want %d", ribbon, tt.ribbon)
			}
		})
	}
}

func TestParseInput(t *testing.T) {
	var tests = []struct {
		s    string
		length int
		width int
		height int
	}{
		{"2x3x4",	2, 3, 4},
		{"1x1x10", 1, 1, 10},
	}

	for _, tt := range tests {
		testname := tt.s
		t.Run(testname, func(t *testing.T) {
			length, width, height, err := ParseInput(testname)
			if err != nil {
				t.Errorf("Got an error! Failure!")
			}

			if (length != tt.length) {
				t.Errorf("got length %d, want %d", length, tt.length)
			}

			if (width != tt.width) {
				t.Errorf("got length %d, want %d", width, tt.width)
			}

			if (height != tt.height) {
				t.Errorf("got length %d, want %d", height, tt.height)
			}
		})
	}
}

func TestCalculateWrappingPaper(t *testing.T) {
	var tests = []struct {
		length int
		width int
		height int
		want int
	}{
		{2, 3, 4,	58},
		{1, 1, 10, 43},
		{32, 1, 2, 198},
	}

	for _, tt := range tests {
		testname := fmt.Sprintf("Length: %d, Width: %d, height: %d", tt.length, tt.width, tt.height)
		t.Run(testname, func(t *testing.T) {
			ans := CalculateNeededWrappingPaper(tt.length, tt.width, tt.height)
			if ans != tt.want {
				t.Errorf("got %d, want %d", ans, tt.want)
			}
		})
	}
}

func TestCalculateRibbon(t *testing.T) {
	var tests = []struct {
		length int
		width int
		height int
		want int
	}{
		{2, 3, 4,	34},
		{1, 1, 10, 14},
		{32, 1, 2, 70},
	}

	for _, tt := range tests {
		testname := fmt.Sprintf("Length: %d, Width: %d, height: %d", tt.length, tt.width, tt.height)
		t.Run(testname, func(t *testing.T) {
			ans := CalculateNeededRibbon(tt.length, tt.width, tt.height)
			if ans != tt.want {
				t.Errorf("got %d, want %d", ans, tt.want)
			}
		})
	}
}