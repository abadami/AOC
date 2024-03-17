package _015

import "testing"

func TestDayOnePartOne2015(t *testing.T) {
	var tests = []struct {
		s    string
		floorCount int
		basementPosition int
	}{
		{"(())", 0, 0},
		{"()()", 0, 0},
		{"(((", 3, 0},
		{"(()(()(", 3, 0},
		{"))(((((", 3, 1},
		{"))(", -1, 1},
		{"())", -1, 3},
		{")))", -3, 1},
		{")())())", -3, 1},
		{"()())", -1, 5 },
	}

	for _, tt := range tests {
		testname := tt.s
		t.Run(testname, func(t *testing.T) {
			floorCount, firstBasement := DayOnePartOne2015(tt.s)
			if floorCount != tt.floorCount {
				t.Errorf("got floor count %d, want %d", floorCount, tt.floorCount)
			} else if firstBasement != tt.basementPosition {
				t.Errorf("got first basement %d, want %d", firstBasement, tt.basementPosition)
			}
		})
	}
}