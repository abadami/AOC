const ROCK_SCORE: i64 = 1;
const PAPER_SCORE: i64 = 2;
const SCISSORS_SCORE: i64 = 3;
const WIN_SCORE: i64 = 6;
const DRAW_SCORE: i64 = 3;
const LOSE_SCORE: i64 = 0;

struct OpponentChoice {
  A: usize,
  B: usize,
  C: usize
}

impl OpponentChoice {
  fn get(&self, option: &str) -> usize {
    if option == "A" {
      return self.A;
    } else if option == "B" {
      return self.B;
    } else if option == "C" {
      return self.C;
    } else {
      return 0;
    }
  }
}

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

fn initialize_possible_scores () -> Vec<Vec<i64>> {
  let mut possible_scores: Vec<Vec<i64>> = vec![vec![], vec![], vec![]];

  let possible_answers = ["Y", "X", "Z"];
  
  for answer in possible_answers {
    possible_scores[0].push(handle_rock_scenario(answer));
    possible_scores[1].push(handle_paper_scenario(answer));
    possible_scores[2].push(handle_scissors_scenario(answer))
  }

  possible_scores[0].sort();
  possible_scores[1].sort();
  possible_scores[2].sort();

  return possible_scores;
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