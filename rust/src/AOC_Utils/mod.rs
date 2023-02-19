pub trait AOCProblem: Sized {
  fn part1(&self, input: &str) -> String;

  fn part2(&self, input: &str) -> String;

  fn run_problem(&self);
}