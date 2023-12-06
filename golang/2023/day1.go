package _023

import (
	"AOC/go.mod/utils"
	"math"
	"strconv"
	"strings"
)

func DayOne2023() {
	input := utils.ReadInput("./2023/inputs/1.txt")

	println("Day One")
	println("Part 1: ", dayOnePartOne2023(input))
	println("Part 2: ", dayOnePartTwo2023(input))
}

func dayOnePartOne2023(input string) int {
	lines := strings.Split(input, "\r\n")

	sum := 0

	for _, line := range lines {
		sum = sum + extractDigits(line)
	}

	return sum
}

func dayOnePartTwo2023(input string) int {
	lines := strings.Split(input, "\r\n")

	sum := 0

	for _, line := range lines {
		val := improvedExtractDigits(line)

		sum = sum + val
	}

	return sum
}

func extractDigits(s string) int {
	const digitString = "1234567890"
	firstDigitCharIndex := strings.IndexAny(s, digitString)
	lastDigitCharIndex := strings.LastIndexAny(s, digitString)

	numberString := strings.Join([]string{s[firstDigitCharIndex : firstDigitCharIndex+1], s[lastDigitCharIndex : lastDigitCharIndex+1]}, "")

	val, err := strconv.Atoi(numberString)

	if err != nil {
		return -1
	}

	return val
}

func improvedExtractDigits(s string) int {
	numberOrder := map[string][]int{
		"1":     {-1, -1},
		"2":     {-1, -1},
		"3":     {-1, -1},
		"4":     {-1, -1},
		"5":     {-1, -1},
		"6":     {-1, -1},
		"7":     {-1, -1},
		"8":     {-1, -1},
		"9":     {-1, -1},
		"one":   {-1, -1},
		"two":   {-1, -1},
		"three": {-1, -1},
		"four":  {-1, -1},
		"five":  {-1, -1},
		"six":   {-1, -1},
		"seven": {-1, -1},
		"eight": {-1, -1},
		"nine":  {-1, -1},
	}

	digitMap := map[string]int{
		"1":     1,
		"2":     2,
		"3":     3,
		"4":     4,
		"5":     5,
		"6":     6,
		"7":     7,
		"8":     8,
		"9":     9,
		"one":   1,
		"two":   2,
		"three": 3,
		"four":  4,
		"five":  5,
		"six":   6,
		"seven": 7,
		"eight": 8,
		"nine":  9,
	}

	for name := range numberOrder {
		numberOrder[name][0] = strings.Index(s, name)
		numberOrder[name][1] = strings.LastIndex(s, name)
	}

	type NumberPair struct {
		name         string
		lowestIndex  int
		highestIndex int
		digit        int
	}

	lowestNumber := NumberPair{lowestIndex: math.MaxInt, highestIndex: math.MaxInt, name: "zero", digit: 0}
	highestNumber := NumberPair{lowestIndex: math.MinInt, highestIndex: math.MinInt, name: "zero", digit: 0}

	for name, index := range numberOrder {

		if index[0] != -1 && index[0] < lowestNumber.lowestIndex {
			lowestNumber = NumberPair{lowestIndex: index[0], highestIndex: index[1], name: name, digit: digitMap[name]}
		}

		if index[1] != -1 && index[1] > highestNumber.highestIndex {
			highestNumber = NumberPair{highestIndex: index[1], lowestIndex: index[0], name: name, digit: digitMap[name]}
		}
	}

	return (lowestNumber.digit * 10) + highestNumber.digit
}
