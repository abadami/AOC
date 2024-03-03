use std::fs;

pub fn run_problem1() {
    let input = fs::read_to_string("./src/aoc_23/day1/input.txt")
        .expect("Should have been able to read the file for day 1");

    println!("Day 1 Results");
    println!("---");

    println!("Part 1: {0}", part1(&input));
    println!("Part 2: {0}", part2(&input));
}

fn find_text_indices(case: &str, text: &str) -> (usize, usize) {
    let text_option = case.find(text);

    let first_index = text_option.unwrap_or_else(|| 99);

    let reverse_text_option = case.find(text);

    let second_index = reverse_text_option.unwrap_or_else(|| 99);

    (first_index, second_index)
}

fn part2(input: &str) -> usize {
    let cases: Vec<&str> = input.lines().collect();

    let sum: usize = 0;

    for case in cases {
        let first_digit_result = case.find(|character: char| character.is_digit(10));

        let first_digit_index = match first_digit_result {
            Some(val) => val,
            None => panic!("First Digit not found"),
        };

        let last_digit_result = case.rfind(|character: char| character.is_digit(10));

        let last_digit_index = match last_digit_result {
            Some(val) => val,
            None => panic!("Last digit not found"),
        };

        let first_one_index = case.find("one");
        let last_one_index = case.rfind("one");
    }

    sum
}

fn part1(input: &str) -> usize {
    let cases: Vec<&str> = input.lines().collect();

    let mut sum: usize = 0;

    for case in cases {
        let first_digit_result = case.find(|character: char| character.is_digit(10));

        let first_digit_index = match first_digit_result {
            Some(val) => val,
            None => panic!("First Digit not found"),
        };

        let last_digit_result = case.rfind(|character: char| character.is_digit(10));

        let last_digit_index = match last_digit_result {
            Some(val) => val,
            None => panic!("Last digit not found"),
        };

        let mut number_text = String::new();

        number_text.push(case.chars().nth(first_digit_index).unwrap_or('0'));
        number_text.push(case.chars().nth(last_digit_index).unwrap_or('0'));

        let parse_number_result = number_text.parse::<usize>();

        let number = match parse_number_result {
            Ok(val) => val,
            Err(_) => panic!("Did not get number to parse"),
        };

        sum += number;
    }

    sum
}

#[cfg(test)]
mod tests {
    use crate::aoc_23::day1::{part1, part2};

    #[test]
    fn test_part1() {
        let input = "1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet";

        let result = part1(&input);

        assert_eq!(result, 142);
    }

    #[test]
    fn test_part2() {
        let input = "two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen";

        let result = part2(&input);

        assert_eq!(result, 281);
    }
}
