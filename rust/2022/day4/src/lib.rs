fn get_ids(scenario: &str) -> Vec<i64> {
  return scenario.split([',', '-']).map(|a| a.parse().unwrap() ).collect();
}

fn is_fully_contained(scenario: Vec<i64>) -> i64 {
  if scenario.len() != 4 {
    panic!("This isn't right");
  }

  if scenario[2] >= scenario[0] && scenario[3] <= scenario[1] {
    return 1
  } else if scenario[0] >= scenario[2] && scenario[1] <= scenario[3] {
    return 1
  }

  return 0;
}

pub fn part1(input: &String) -> i64 {
  return input.lines().into_iter().map(get_ids).map(is_fully_contained).sum();
}

pub fn part2(input: &String) -> i64 {
  let scenarios: Vec<&str> = input.split("\r\n").collect();

  return 0;
}