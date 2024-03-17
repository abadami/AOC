package _015

import (
	"AOC/go.mod/utils"
)

func DayOne2015() {
	input := utils.ReadInput("./2015/inputs/day1.txt")

	lastFloor, firstBasement := DayOnePartOne2015(input)

	println("Day One")
	println("Part 1: ", lastFloor)
	println("Part 2: ", firstBasement)

}

func DayOnePartOne2015(input string) (int, int) {
	counter := 0
	position := 0

	for index, symbol := range input {
		switch symbol {
		case '(':
			counter++
		case ')':
			counter--
		default:
			println("Invalid Character")
		}

		if counter == -1 && position == 0 {
			position = index + 1
		}
	}


	return counter, position
}