package _023

import (
	"AOC/go.mod/utils"
	"strconv"
	"strings"
	"unicode"
)

//lol, commit test

func DayThree2023() {
	input := utils.ReadInput("./2023/inputs/3.txt")

	println("Day Three")
	println("Part 1: ", dayThreePartOne2023(input))
	println("Part 2: ", dayThreePartTwo2023(input))
}

func dayThreePartOne2023(input string) int {
	lines := strings.Split(input, "\r\n")

	var validNumbers = map[int]bool{}

	numbers := map[string]struct {
		start int
		end   int
		line  int
	}{}

	var symbols []struct {
		x int
		y int
	}

	for y, line := range lines {
		characters := []rune(line)
		var stringNumber []rune

		for x, symbol := range characters {
			if symbol == '.' {

				if len(stringNumber) > 0 {
					length := len(stringNumber)

					stringNumber = append(stringNumber, '.')
					stringNumber = append(stringNumber, []rune(strconv.Itoa(y))[0])
					stringNumber = append(stringNumber, '.')
					stringNumber = append(stringNumber, []rune(strconv.Itoa(x))[0])

					numbers[string(stringNumber)] = struct {
						start int
						end   int
						line  int
					}{start: x - length, end: x - 1, line: y}

					stringNumber = []rune{}
				}
			}

			if checkSymbol(symbol) {
				symbols = append(symbols, struct {
					x int
					y int
				}{x: x, y: y})

				if len(stringNumber) > 0 {
					length := len(stringNumber)

					stringNumber = append(stringNumber, '.')
					stringNumber = append(stringNumber, []rune(strconv.Itoa(y))[0])
					stringNumber = append(stringNumber, '.')
					stringNumber = append(stringNumber, []rune(strconv.Itoa(x))[0])

					numbers[string(stringNumber)] = struct {
						start int
						end   int
						line  int
					}{start: x - length, end: x - 1, line: y}

					stringNumber = []rune{}
				}
			}

			if unicode.IsDigit(symbol) {
				stringNumber = append(stringNumber, symbol)
			}
		}

		if len(stringNumber) > 0 {

			length := len(stringNumber)

			stringNumber = append(stringNumber, '.')
			stringNumber = append(stringNumber, []rune(strconv.Itoa(y))[0])
			stringNumber = append(stringNumber, '.')
			stringNumber = append(stringNumber, []rune(strconv.Itoa(len(line)))[0])

			numbers[string(stringNumber)] = struct {
				start int
				end   int
				line  int
			}{start: len(line) - length, end: len(line) - 1, line: y}

			stringNumber = []rune{}
		}
	}

	for _, symbol := range symbols {
		for number, position := range numbers {
			if symbol.x >= position.start-1 && symbol.x <= position.end+1 && symbol.y >= position.line-1 && symbol.y <= position.line+1 {
				splitNumber := strings.Split(number, ".")
				val, err := strconv.Atoi(splitNumber[0])
				if err != nil {
					return -1
				}
				validNumbers[val] = true
			}
		}
	}

	sum := 0

	for number, _ := range validNumbers {
		sum = sum + number
	}

	return sum

}

func dayThreePartTwo2023(input string) int {
	return 0
}

func checkSymbol(symbol rune) bool {
	return !unicode.IsLetter(symbol) && !unicode.IsDigit(symbol) && symbol != '.'
}
