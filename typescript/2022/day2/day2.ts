const ROCK_SCORE = 1;
const PAPER_SCORE = 2;
const SCISSORS_SCORE = 3;
const WIN_SCORE = 6;
const DRAW_SCORE = 3;
const LOSE_SCORE = 0;

const handleRockScenario = (choice: string) => {
  let scoreForRound = 0;

  if (choice === "Y") {
    // 6 for win, 2 for paper
    scoreForRound += PAPER_SCORE + WIN_SCORE;
  } else if (choice === "X") {
    // 3 for draw, 1 for rock
    scoreForRound += ROCK_SCORE + DRAW_SCORE;
  } else if (choice === "Z") {
    // 0 for lose, 3 for scissors
    scoreForRound += SCISSORS_SCORE + LOSE_SCORE;
  }

  return scoreForRound;
};

const handlePaperScenario = (choice: string) => {
  let scoreForRound = 0;

  if (choice === "Y") {
    // 3 for lose, 2 for paper
    scoreForRound += PAPER_SCORE + DRAW_SCORE;
  } else if (choice === "X") {
    // 0 for draw, 1 for rock
    scoreForRound += ROCK_SCORE + LOSE_SCORE;
  } else if (choice === "Z") {
    // 6 for win, 3 for scissors
    scoreForRound += SCISSORS_SCORE + WIN_SCORE;
  }

  return scoreForRound;
};

const handleScissorsScenario = (choice: string) => {
  let scoreForRound = 0;

  if (choice === "Y") {
    // 0 for lose, 3 for paper
    scoreForRound += PAPER_SCORE + LOSE_SCORE;
  } else if (choice === "X") {
    // 6 for win, 1 for rock
    scoreForRound += ROCK_SCORE + WIN_SCORE;
  } else if (choice === "Z") {
    // 3 for draw, 3 for scissors
    scoreForRound += SCISSORS_SCORE + DRAW_SCORE;
  }

  return scoreForRound;
};

export const part1 = (input: string) => {
  const scenarios = input.split("\r\n");

  let totalScore = 0;

  scenarios.forEach((scenario) => {
    const choices = scenario.split(" ");

    if (choices[0] === "A") {
      totalScore += handleRockScenario(choices[1]);
    } else if (choices[0] === "B") {
      totalScore += handlePaperScenario(choices[1]);
    } else if (choices[0] === "C") {
      totalScore += handleScissorsScenario(choices[1]);
    }
  });

  return totalScore;
};

export const part2 = (input: string) => {
  return 0;
};
