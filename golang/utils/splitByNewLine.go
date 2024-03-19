package utils

import "strings"

func SplitByNewLine(input string) []string {
	return strings.Split(strings.ReplaceAll(input, "\r\n", "\n"), "\n")
}