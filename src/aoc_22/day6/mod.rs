use std::{collections::HashSet, fs};

fn look_for_distinct_characters_index(characters: Vec<char>, number: usize) -> usize {
  let mut index = 0;

  while index <= characters.len() - number {
    let mut character_set: HashSet<char> = HashSet::new();

    for i in 0..number {
      character_set.insert(characters[index + i]);
    }

    if character_set.len() == number {
      return index + number;
    }

    index = index + 1;
  }

  return 0;
}

fn part1(input: &String) -> usize {
  let characters: Vec<char> = input.chars().collect();

  return look_for_distinct_characters_index(characters, 4);
}

fn part2(input: &String) -> usize {
  let characters: Vec<char> = input.chars().collect();

  return look_for_distinct_characters_index(characters, 14);
}

pub fn run_problem6() {
  let input = fs::read_to_string("../day6/input.txt")
  .expect("Should have been able to read the file for Day 6");

  println!("Day 6 Results");
  println!("---");
  println!("Part 1: {0}", part1(&input));
  println!("Part 2: {0}", part2(&input));
}