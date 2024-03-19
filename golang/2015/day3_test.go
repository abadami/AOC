package _015

import "testing"

func TestDayThreePartOne2015(t *testing.T) {
	var tests = []struct {
		s    string
		want int
	}{
		{ ">", 2 },
		{ "^>v<", 4 },
		{ "^v^v^v^v^v", 2 },
	}

	for _, tt := range tests {
		testname := tt.s
		t.Run(testname, func(t *testing.T) {
			ans := DayThreePartOne(testname)
			if ans != tt.want {
				t.Errorf("got %d, want %d", ans, tt.want)
			}
		})
	}
}

func TestDayThreePartTwo2015(t *testing.T) {
	var tests = []struct {
		s    string
		want int
	}{
		{ ">", 2 },
		{ "^v", 3 },
		{ "^>v<", 3 },
		{ "^v^v^v^v^v", 11 },
	}

	for _, tt := range tests {
		testname := tt.s
		t.Run(testname, func(t *testing.T) {
			ans := DayThreePartTwo(testname)
			if ans != tt.want {
				t.Errorf("got %d, want %d", ans, tt.want)
			}
		})
	}
}