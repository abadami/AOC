package _015

import (
	"AOC/go.mod/utils"
	"fmt"
)

func DayThree2015() {
	input := utils.ReadInput("./2015/inputs/day3.txt")

	println("Day Three")
	println("Part 1: ", DayThreePartOne(input))
	println("Part 2: ", DayThreePartTwo(input))

}

func DayThreePartOne(input string) int {
	coordinateMap := map[string]int{}
	x := 0
	y := 0

	coordinateMap["0,0"] = 1

	for _, symbol := range input {
		switch symbol {
		case '^':
			y = y + 1
		case '>':
			x = x + 1
		case '<':
			x = x - 1
		case 'v':
			y = y - 1
		default:
			continue
		}

		coordinateString := fmt.Sprintf("%d,%d", x, y)

		coordinateMap[coordinateString] = coordinateMap[coordinateString] + 1
	}

	return len(coordinateMap)
}

func DayThreePartTwo(input string) int {
	coordinateMap := map[string]int{}
	santaX := 0
	santaY := 0
	roboX := 0
	roboY := 0

	coordinateMap["0,0"] = 1

	for index, symbol := range input {
		changedX, changedY := changeAppropriateCoordinate(&santaX, &santaY, &roboX, &roboY, index)
		x := *changedX
		y := *changedY

		switch symbol {
		case '^':
			*changedY = y + 1
		case '>':
			*changedX = x + 1
		case '<':
			*changedX = x - 1
		case 'v':
			*changedY = y - 1
		default:
			continue
		}

		coordinateString := fmt.Sprintf("%d,%d", *changedX, *changedY)

		coordinateMap[coordinateString] = coordinateMap[coordinateString] + 1
	}

	return len(coordinateMap)
}

func changeAppropriateCoordinate(santaX *int, santaY *int, roboX *int, roboY *int, index int) (*int, *int) {
	if index % 2 == 0 {
		return roboX, roboY
	} else {
		return santaX, santaY
	}
}