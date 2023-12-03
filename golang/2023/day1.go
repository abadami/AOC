package _023

import (
	"AOC/go.mod/utils"
	"cmp"
	"fmt"
	"math"
	"slices"
	"strconv"
	"strings"
)

func DayOne2023() {
	input := utils.ReadInput("./2023/dayoneinput.txt")

	println("Day One")
	println("Part 1: ", dayOnePartOne2023(input))
	println("Part 2: ", dayTwoPartTwo2023(input))
}

func dayOnePartOne2023(input string) int {
	lines := strings.Split(input, "\r\n")

	sum := 0

	for _, line := range lines {
		sum = sum + extractDigits(line)
	}

	return sum
}

func dayTwoPartTwo2023(input string) int {
	lines := strings.Split(input, "\r\n")

	sum := 0

	for index, line := range lines {
		working := extractDigits(line)
		val := improvedExtractDigits(line)

		if working != val {
			fmt.Printf("index: %d, working: %d, new: %d \n", index, working, val)
		}

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
	numberOrder := map[string]int{
		"1": -1,
		"2": -1,
		"3": -1,
		"4": -1,
		"5": -1,
		"6": -1,
		"7": -1,
		"8": -1,
		"9": -1,
		//"one":   -1,
		//"two":   -1,
		//"three": -1,
		//"four":  -1,
		//"five":  -1,
		//"six":   -1,
		//"seven": -1,
		//"eight": -1,
		//"nine":  -1,
	}

	digitMap := map[string]int{
		"1": 1,
		"2": 2,
		"3": 3,
		"4": 4,
		"5": 5,
		"6": 6,
		"7": 7,
		"8": 8,
		"9": 9,
		//"one":   1,
		//"two":   2,
		//"three": 3,
		//"four":  4,
		//"five":  5,
		//"six":   6,
		//"seven": 7,
		//"eight": 8,
		//"nine":  9,
	}

	for name := range numberOrder {
		numberOrder[name] = strings.Index(s, name)
	}

	type NumberPair struct {
		name  string
		index int
		digit int
	}

	lowestNumber := NumberPair{index: math.MaxInt, name: "zero", digit: 0}
	highestNumber := NumberPair{index: math.MinInt, name: "zero", digit: 0}

	for name, index := range numberOrder {
		if index == -1 {
			continue
		}

		if index < lowestNumber.index {
			lowestNumber = NumberPair{index: index, name: name, digit: digitMap[name]}
		}

		if index > highestNumber.index {
			highestNumber = NumberPair{index: index, name: name, digit: digitMap[name]}
		}
	}

	return (lowestNumber.digit * 10) + highestNumber.digit
}

func replaceDigitStrings(s string) string {
	newString := s

	type NumberOrder struct {
		index int
		name  string
		digit string
	}

	var numberOrder = []NumberOrder{
		{index: -1, name: "one", digit: "1"},
		{index: -1, name: "two", digit: "2"},
		{index: -1, name: "three", digit: "3"},
		{index: -1, name: "four", digit: "4"},
		{index: -1, name: "five", digit: "5"},
		{index: -1, name: "six", digit: "6"},
		{index: -1, name: "seven", digit: "7"},
		{index: -1, name: "eight", digit: "8"},
		{index: -1, name: "nine", digit: "9"},
	}

	numberOrder[0].index = strings.Index(s, "one")
	numberOrder[1].index = strings.Index(s, "two")
	numberOrder[2].index = strings.Index(s, "three")
	numberOrder[3].index = strings.Index(s, "four")
	numberOrder[4].index = strings.Index(s, "five")
	numberOrder[5].index = strings.Index(s, "six")
	numberOrder[6].index = strings.Index(s, "seven")
	numberOrder[7].index = strings.Index(s, "eight")
	numberOrder[8].index = strings.Index(s, "nine")

	slices.SortFunc(numberOrder, func(a, b NumberOrder) int {
		return cmp.Compare(a.index, b.index)
	})

	var filteredNumberOrder []NumberOrder

	for _, order := range numberOrder {
		if order.index != -1 {
			filteredNumberOrder = append(filteredNumberOrder, order)
		}
	}
	println(newString)
	if len(filteredNumberOrder) > 0 {
		newString = strings.ReplaceAll(newString, filteredNumberOrder[0].name, filteredNumberOrder[0].digit)
		newString = strings.ReplaceAll(newString, filteredNumberOrder[len(filteredNumberOrder)-1].name, filteredNumberOrder[len(filteredNumberOrder)-1].digit)
	}
	println(newString)

	//for _, order := range numberOrder {
	//newString = strings.ReplaceAll(newString, order.name, order.digit)
	//}

	return newString
}
