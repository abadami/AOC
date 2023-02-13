use super::super::AOC_Utils::AOCProblem;
use std::fs;


pub struct Day1Problem {}

impl AOCProblem for Day1Problem {
  fn part1(&self, input: &str) -> String {
    let split_values: Vec<&str> = input.split("\r\n").collect();

    let mut highest: i64 = 0;

    let mut total: i64 = 0;

    for value_string in split_values {
      if value_string == "" {
        if total > highest {
          highest = total;
        }

        total = 0;
      } else {
        let value: i64 = value_string.parse().unwrap();

        total = total + value;
      }
    }

    let highest_string = highest.to_string();

    return highest_string;
  }

  fn part2(&self, input: &str) -> String {
    let split_values: Vec<&str> = input.split("\r\n").collect();

    let mut totals: Vec<i64> = vec![];

    let mut total: i64 = 0;

    for value_string in split_values {
      if value_string == "" {
        totals.push(total);

        total = 0;
      } else {
        let value: i64 = value_string.parse().unwrap();

        total = total + value;
      }
    }
    
    totals.sort_by(|a, b| b.cmp(a));

    let three_highest = totals[0] + totals[1] + totals[2];

    return three_highest.to_string();
  }

  fn run_problem(&self) {
    let input = fs::read_to_string("./src/AOC_22/day1/input.txt")
    .expect("Should have been able to read the file");

    println!("Day 1 Results");
    println!("---");
    println!("Part 1: {0}", self.part1(&input));
    println!("Part 2: {0}", self.part2(&input));
  }
}