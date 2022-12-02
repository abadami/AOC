const ROCK_SCORE: i64 = 1;
const PAPER_SCORE: i64 = 2;
const SCISSORS_SCORE: i64 = 3;
const WIN_SCORE: i64 = 6;
const DRAW_SCORE: i64 = 3;
const LOSE_SCORE: i64 = 0;

fn handle_rock_scenario (choice: &str) -> i64 {
  let mut score_for_round = 0;

  if choice == "Y" {
    score_for_round = PAPER_SCORE + WIN_SCORE;
  } else if choice == "X" {
    score_for_round = ROCK_SCORE + DRAW_SCORE;
  } else if choice == "Z" {
    score_for_round = SCISSORS_SCORE + LOSE_SCORE;
  }

  return score_for_round;
}

fn handle_paper_scenario (choice: &str) -> i64 {
  let mut score_for_round = 0;

  if choice == "Y" {
    score_for_round = PAPER_SCORE + DRAW_SCORE;
  } else if choice == "X" {
    score_for_round = ROCK_SCORE + LOSE_SCORE;
  } else if choice == "Z" {
    score_for_round = SCISSORS_SCORE + WIN_SCORE;
  }

  return score_for_round;
}

fn handle_scissors_scenario (choice: &str) -> i64 {
  let mut score_for_round = 0;

  if choice == "Y" {
    score_for_round = PAPER_SCORE + LOSE_SCORE;
  } else if choice == "X" {
    score_for_round = ROCK_SCORE + WIN_SCORE;
  } else if choice == "Z" {
    score_for_round = SCISSORS_SCORE + DRAW_SCORE;
  }

  return score_for_round;
}

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
  let split_values: Vec<&str> = input.split("\n").collect();

  return 0;
}