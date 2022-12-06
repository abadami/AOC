use std::collections::HashSet;

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

pub fn part1(input: &String) -> usize {
  let characters: Vec<char> = input.chars().collect();

  return look_for_distinct_characters_index(characters, 4);
}

pub fn part2(input: &String) -> usize {
  let characters: Vec<char> = input.chars().collect();

  return look_for_distinct_characters_index(characters, 14);
}