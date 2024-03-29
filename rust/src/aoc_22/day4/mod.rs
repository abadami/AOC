use std::fs;

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

fn count_overlap_sections(scenario: Vec<i64>) -> i64 {
  if scenario.len() != 4 {
    panic!("This isn't right");
  }

  let mut elf_a_sections: Vec<i64> = Vec::new();

  for i in scenario[0]..scenario[1] + 1 {
    elf_a_sections.push(i);
  }

  for i in scenario[2]..scenario[3] + 1 {
    if elf_a_sections.contains(&i) {
      return 1;
    }
  }

  return 0;
}

fn part1(input: &String) -> i64 {
  return input.lines().into_iter().map(get_ids).map(is_fully_contained).sum();
}

fn part2(input: &String) -> i64 {
  return input.lines().into_iter().map(get_ids).map(count_overlap_sections).sum();
}

pub fn run_problem4() {
  let input = fs::read_to_string("../day4/input.txt")
  .expect("Should have been able to read the file for Day 4");

  println!("Day 4 Results");
  println!("---");
  println!("Part 1: {0}", part1(&input));
  println!("Part 2: {0}", part2(&input));
}