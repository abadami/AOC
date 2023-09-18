package _022

import (
	"AOC/go.mod/utils"
	"slices"
	"sort"
	"strconv"
	"strings"
)

func DayOne2022() {
	input := utils.ReadInput("./2022/dayoneinput.txt")

	println("Day One")
	println("Part 1: ", dayOnePartOne2022(input))
	println("Part 2: ", dayTwoPartTwo2022(input))
}

func dayOnePartOne2022(input string) int {
	pieces := strings.Split(input, "\r\n")

	highest := 0
	total := 0

	for _, val := range pieces {
		if val == "" {
			if total > highest {
				highest = total
			}
			total = 0
		} else {
			num, e := strconv.Atoi(val)
			utils.Check(e)
			total = total + num
		}
	}

	return highest
}

func dayTwoPartTwo2022(input string) int {
	pieces := strings.Split(input, "\r\n")

	var totals []int
	total := 0

	for _, val := range pieces {
		if val == "" {
			totals = append(totals, total)
			total = 0
		} else {
			num, e := strconv.Atoi(val)
			utils.Check(e)
			total = total + num
		}
	}

	sort.Ints(totals)

	slices.SortFunc(totals, func(a int, b int) int {
		return b - a
	})

	return totals[0] + totals[1] + totals[2]
}
