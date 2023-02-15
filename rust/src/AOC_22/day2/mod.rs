mod helpers;

use std::fs;

use helpers::*;

pub fn part1(input: &String) -> i64 {
  let scenarios: Vec<&str> = input.split("\r\n").collect();

  let mut total_score = 0;

  for scenario in scenarios {
    let choices: Vec<&str> = scenario.split(" ").collect();

    if choices[0] == "A" {
      total_score += handle_rock_scenario(choices[1]);
    } else if choices[0] == "B" {
      total_score += handle_paper_scenario(choices[1]);
    } else if choices[0] == "C" {
      total_score += handle_scissors_scenario(choices[1]);
    }
  }

  return total_score;
}

pub fn part2(input: &String) -> i64 {
  let scenarios: Vec<&str> = input.split("\r\n").collect();

  let mut total_score = 0;

  let possible_scenario_results = initialize_possible_scores();

  let possible_opponent_choice = OpponentChoice {
    A: 0,
    B: 1,
    C: 2
  };

  for scenario in scenarios {
    let choices: Vec<&str> = scenario.split(" ").collect();

    if choices[1] == "X" {
      total_score += possible_scenario_results[possible_opponent_choice.get(choices[0])][0];
    } else if choices[1] == "Y" {
      total_score += possible_scenario_results[possible_opponent_choice.get(choices[0])][1];
    } else if choices[1] == "Z" {
      total_score += possible_scenario_results[possible_opponent_choice.get(choices[0])][2];
    }
  }

  return total_score;
}

pub fn run_problem2() {
  let input = fs::read_to_string("./src/AOC_22/day2/input.txt")
  .expect("Should have been able to read the file for Day 2");

  println!("Day 2 Results");
  println!("---");
  println!("Part 1: {0}", part1(&input));
  println!("Part 2: {0}", part2(&input));
}