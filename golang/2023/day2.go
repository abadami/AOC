package _023

import (
	"AOC/go.mod/utils"
	"strconv"
	"strings"
)

func DayTwo2023() {
	input := utils.ReadInput("./2023/inputs/2.txt")

	println("Day Two")
	println("Part 1: ", dayTwoPartOne2023(input))
	println("Part 2: ", dayTwoPartTwo2023(input))
}

func dayTwoPartOne2023(input string) int {
	games := strings.Split(input, "\r\n")

	sum := 0

	for _, game := range games {
		isValid, id := isGameValid(game)

		if isValid {
			sum = sum + id
		}
	}

	return sum
}

func dayTwoPartTwo2023(input string) int {
	games := strings.Split(input, "\r\n")

	sum := 0

	for _, game := range games {
		power := findGamePower(game)

		sum = sum + power
	}

	return sum
}

func isGameValid(gameLine string) (bool, int) {
	colorNumbers := map[string]int{
		"red":   12,
		"green": 13,
		"blue":  14,
	}

	pickedCubes := map[string]int{
		"red":   0,
		"green": 0,
		"blue":  0,
	}

	splitGameLine := strings.Split(gameLine, ":")

	splitIdentifier := strings.Split(splitGameLine[0], " ")

	id, err := strconv.Atoi(splitIdentifier[1])

	if err != nil {
		return false, -1
	}

	splitGames := strings.Split(splitGameLine[1], ";")

	for _, allPicks := range splitGames {
		splitPicks := strings.Split(allPicks, ", ")

		for _, pick := range splitPicks {
			splitCube := strings.Split(strings.Trim(pick, " "), " ")

			cubeCount, err := strconv.Atoi(splitCube[0])

			if err != nil {
				return false, id
			}

			pickedCubes[splitCube[1]] = cubeCount
		}

		if pickedCubes["red"] > colorNumbers["red"] {
			return false, id
		}

		if pickedCubes["green"] > colorNumbers["green"] {
			return false, id
		}

		if pickedCubes["blue"] > colorNumbers["blue"] {
			return false, id
		}

		pickedCubes["red"] = 0
		pickedCubes["green"] = 0
		pickedCubes["blue"] = 0
	}

	return true, id
}

func findGamePower(gameLine string) int {
	maxCubes := map[string]int{
		"red":   0,
		"green": 0,
		"blue":  0,
	}

	splitGameLine := strings.Split(gameLine, ":")

	splitGames := strings.Split(splitGameLine[1], ";")

	for _, allPicks := range splitGames {
		splitPicks := strings.Split(allPicks, ", ")

		for _, pick := range splitPicks {
			splitCube := strings.Split(strings.Trim(pick, " "), " ")

			cubeCount, err := strconv.Atoi(splitCube[0])

			if err != nil {
				return 0
			}

			if cubeCount > maxCubes[splitCube[1]] {
				maxCubes[splitCube[1]] = cubeCount
			}
		}
	}

	if maxCubes["red"] == 0 {
		println("Red zero max detected!")
		maxCubes["red"] = 1
	}

	if maxCubes["green"] == 0 {
		println("Green zero max detected!")
		maxCubes["green"] = 1
	}

	if maxCubes["blue"] == 0 {
		println("Blue zero max detected!")
		maxCubes["blue"] = 1
	}

	return maxCubes["red"] * maxCubes["green"] * maxCubes["blue"]
}
