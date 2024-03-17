package _023

import (
	"fmt"
	"testing"
)

func TestIs(t *testing.T) {
	var tests = []struct {
		s        string
		wantBool bool
		wantInt  int
	}{
		{"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green", true, 1},
		{"Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue", true, 2},
		{"Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red", false, 3},
		{"Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red", false, 4},
		{"Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green", true, 5},
	}

	for _, tt := range tests {
		testname := fmt.Sprintf("%s", tt.s)
		t.Run(testname, func(t *testing.T) {
			isValid, id := isGameValid(tt.s)
			if id != tt.wantInt {
				t.Errorf("got %d, want %d", id, tt.wantInt)
			}

			if isValid != tt.wantBool {
				t.Errorf("got %t, want %t", isValid, tt.wantBool)
			}

		})
	}
}


