package utils

import "os"

func ReadInput(path string) string {
	location, locErr := os.Getwd()

	Check(locErr)

	println(location)

	dat, err := os.ReadFile(path)
	Check(err)

	return string(dat)
}
