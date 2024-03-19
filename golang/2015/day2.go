package _015

import (
	"AOC/go.mod/utils"
	"errors"
	"sort"
	"strconv"
	"strings"
)

func DayTwo2015() {
	input := utils.ReadInput("./2015/inputs/day2.txt")

	wrappingPaperUnits, RibbonUnits := DayTwoBoth2015(input)

	println("Day Two")
	println("Part 1: ", wrappingPaperUnits)
	println("Part 2: ", RibbonUnits)

}

func DayTwoBoth2015(input string) (int, int) {
	wrappingPaperAmount := 0
	ribbonAmount := 0

	lines := utils.SplitByNewLine(input)

	for _, line := range lines {
		length, width, height, err := ParseInput(line)

		if err != nil {
			panic("Did not parse Day Two correctly")
		}

		wrappingPaperAmount = wrappingPaperAmount + CalculateNeededWrappingPaper(length, width, height)
		ribbonAmount = ribbonAmount + CalculateNeededRibbon(length, width, height)
	}

	return wrappingPaperAmount, ribbonAmount
}

func CalculateNeededWrappingPaper(length int, width int, height int) int {
	lengthWidth := length * width
	widthHeight := width * height
	heightLength := height * length
	
	lowestNumber := lengthWidth

	if widthHeight < lowestNumber {
		lowestNumber = widthHeight
	} 
	
	if heightLength < lowestNumber {
		lowestNumber = heightLength
	}

	return (2 * lengthWidth) + (2 * widthHeight) + (2 * heightLength) + lowestNumber
}

func CalculateNeededRibbon(length int, width int, height int) int {
	measurements := [3]int{length, width, height}

	sort.Ints(measurements[:])

	return measurements[0] * 2 + measurements[1] * 2 + (measurements[0] * measurements[1] * measurements[2])
}

func ParseInput(input string) (int, int, int, error) {
	measurements := strings.Split(input, "x")

	length, lengthErr := strconv.Atoi(measurements[0])

	width, widthErr := strconv.Atoi(measurements[1])

	height, heightErr := strconv.Atoi(measurements[2])

	if lengthErr != nil || widthErr != nil || heightErr != nil {
		return -1, -1, -1, errors.New("unable to parse")
	}

	return length, width, height, nil
}