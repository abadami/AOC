const ROCK_SCORE: i64 = 1;
const PAPER_SCORE: i64 = 2;
const SCISSORS_SCORE: i64 = 3;
const WIN_SCORE: i64 = 6;
const DRAW_SCORE: i64 = 3;
const LOSE_SCORE: i64 = 0;

pub struct OpponentChoice {
  pub A: usize,
  pub B: usize,
  pub C: usize
}

impl OpponentChoice {
  pub fn get(&self, option: &str) -> usize {
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

pub fn handle_rock_scenario (choice: &str) -> i64 {
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

pub fn handle_paper_scenario (choice: &str) -> i64 {
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

pub fn handle_scissors_scenario (choice: &str) -> i64 {
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

pub fn initialize_possible_scores () -> Vec<Vec<i64>> {
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