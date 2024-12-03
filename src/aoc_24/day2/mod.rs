use std::{env, fs};
use itertools::Itertools;

//Not the proudest of this one, especially looking at more experienced Rust developers tackling this. Alas, need to be
//more aware of iter options and taking them into account.

//May revisit someday (probably not though)

pub fn run_problem_2() {
    let path = env::current_dir().unwrap();

    println!("The current directory is {}", path.display());

    let input = fs::read_to_string("./src/aoc_24/day2/input.txt")
        .expect("Should have been able to read the file for day 2");

    println!("Day 2 Results");
    println!("---");

    println!("Part 1: {0}", part1(&input));
    println!("Part 2: {0}", part2(&input));
}

fn is_report_safe(report: &str) -> bool {
    let report_values: Vec<i32> = report.split_whitespace().map(|value| value.parse::<i32>().unwrap()).collect();

    let mut difference_is_negative = true;

    for index in 0..report_values.len() - 1 {
        let value_a = report_values[index];
        let value_b = report_values[index + 1];

        //this forces the first check to kinda happen twice but it is what it is, too lazy to do something else
        if index == 0 {
            let difference = value_a - value_b;
            difference_is_negative = difference < 0;
        }

        if !are_levels_safe(value_a, value_b, difference_is_negative, index == 0) {
            return false;
        }
    }

    true
}

//Absolutely a better way. The last check could be returned, but I'm too lazy to change it and this is clear enough
fn are_levels_safe(value_a: i32, value_b: i32, difference_is_negative: bool, is_first: bool) -> bool {
    let difference = value_a - value_b;

    if difference.abs() > 3 || difference == 0 {
        return false;
    }

    if is_first {
        return true;
    } else if (difference_is_negative && difference > 0) || (!difference_is_negative && difference < 0) {
        return false
    }

    true
}

fn part1(input: &str) -> i32 {
    let mut safe_count = 0;

    for report in input.lines() {
        if is_report_safe(report) {
            safe_count += 1;
        }
    }

    safe_count
}

fn part2(input: &str) -> i32 {
    let mut safe_count = 0;

    for report in input.lines() {
        if is_report_safe(report) {
            safe_count += 1;
        } else {
            let report_length = report.split_whitespace().count();

            for index in 0..report_length {
                let mut cloned_report = report.clone().split_whitespace().collect::<Vec<&str>>();

                cloned_report.remove(index);
                let cloned_report_str = cloned_report.join(" ");

                if is_report_safe(&cloned_report_str) {
                    safe_count += 1;
                    break;
                }
            }
        }
    }

    safe_count
}

mod test {
    use crate::aoc_24::day2::{is_report_safe, part1, part2};

    #[test]
    fn test_part1() {
        let input = "7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9";

        assert_eq!(part1(input), 2);
    }

    #[test]
    fn test_is_report_safe() {
        let input_a = "7 6 4 2 1";
        let input_b = "1 2 7 8 9";
        let input_c = "9 7 6 2 1";
        let input_d = "1 3 2 4 5";
        let input_e = "8 6 4 4 1";
        let input_f = "1 3 6 7 9";

        assert_eq!(is_report_safe(input_a), true, "Input A failed");
        assert_eq!(is_report_safe(input_b), false, "Input B failed");
        assert_eq!(is_report_safe(input_c), false, "Input C failed");
        assert_eq!(is_report_safe(input_d), false, "Input D failed");
        assert_eq!(is_report_safe(input_e), false, "Input E failed");
        assert_eq!(is_report_safe(input_f), true,  "Input F failed");
    }

    #[test]
    fn test_part2() {
        let input = "7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
5 6 4 3 2 1";

        assert_eq!(part2(input), 5);
    }
}