package _022

import (
	"AOC/go.mod/utils"
	"strings"
)

func DayTwo2022() {
	input := utils.ReadInput("./2022/daytwoinput.txt")

	println("Day 2:")
	println("Part 1: ", dayTwoPart12022(input))
	println("Part 2: ", dayTwoPart22022(input))
}

func dayTwoPart12022(input string) int {
	scenarios := strings.Split(input, "/r/n")

	for _, scenario := range scenarios {
		choices := strings.Split(scenario, " ")

		switch choices[0] {
		case "A":

		}
	}

	return 0
}

func dayTwoPart22022(input string) int {
	return 0
}
