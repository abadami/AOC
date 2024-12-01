// This is how I did it and I'm sticking with it no matter how ugly it is

use std::fs;

fn parse_input(input: Vec<&str>) -> Vec<Vec<u32>> {
  let mut forest: Vec<Vec<u32>> = vec![];
  
  for line in input {
    let trees: Vec<u32> = line.chars().map(|c| c.to_digit(10).unwrap()).collect();

    forest.push(trees)
  }

  return forest;
}

fn find_visible(forest: Vec<Vec<u32>>) -> usize {
  let mut count: usize = 0;

  for row in 0..forest.len() {
    let tree_line = &forest[row];
    for column in 0..tree_line.len() {
      let current_tree = forest[row][column];

      if row == 0 || column == 0 || row == forest.len() - 1 || column == tree_line.len() - 1 {
        count = count + 1;
        continue;
      }

      let mut is_visible: bool = true;

      //Checking trees to the left 
      for position in 0..column {
        let tree = forest[row][position];

        if tree >= current_tree {
          is_visible = false;
        }
      }

      if is_visible {
        count = count + 1;
        continue;
      }

      is_visible = true;

      //Checking trees to the right
      for position in column + 1..tree_line.len() {
        let tree = forest[row][position];

        if tree >= current_tree {
          is_visible = false;
        }
      }

      if is_visible {
        count = count + 1;
        continue;
      }
      
      is_visible = true;

      //Checking trees below
      for position in 0..row {
        let tree = forest[position][column];

        if tree >= current_tree {
          is_visible = false;
        }
      }

      if is_visible {
        count = count + 1;
        continue;
      }
      
      is_visible = true;

      //Checking trees above
      for position in row + 1..forest.len() {
        let tree = forest[position][column];

        if tree >= current_tree {
          is_visible = false;
        }
      }

      if is_visible {
        count = count + 1;
      }
    }
  }

  return count;
}

fn find_scenic(forest: Vec<Vec<u32>>) -> usize {
  let mut highest_scenic_score: usize = 0;

  for row in 0..forest.len() {
    let tree_line = &forest[row];
    for column in 0..tree_line.len() {
      let current_tree = forest[row][column];

      let mut left_count: usize = 0;
      let mut right_count: usize = 0;
      let mut up_count: usize = 0;
      let mut down_count: usize = 0;

      //Checking trees to the left 
      for position in 0..column {
        let tree = forest[row][position];

        if tree >= current_tree {
          left_count = 1;
        } else {
          left_count = left_count + 1;
        }
      }

      //Checking trees to the right
      for position in column + 1..tree_line.len() {
        let tree = forest[row][position];

        if tree >= current_tree {
          right_count = right_count + 1;
          break;
        } else {
          right_count = right_count + 1;
        }
      }

      //Checking trees above
      for position in 0..row {
        let tree = forest[position][column];

        if tree >= current_tree {
          up_count = 1;
        } else {
          up_count = up_count + 1;
        }
      }

      //Checking trees below
      for position in row + 1..forest.len() {
        let tree = forest[position][column];

        if tree >= current_tree {
          down_count = down_count + 1;
          break;
        } else {
          down_count = down_count + 1;
        }
      }
      
      let scenic_score = left_count * right_count * up_count * down_count;

      if scenic_score > highest_scenic_score {
        highest_scenic_score = scenic_score;
      }
    }
  }

  return highest_scenic_score;
}

fn part1(input: &String) -> usize {
  let lines: Vec<&str> = input.lines().collect();

  let forest = parse_input(lines);

  return find_visible(forest);
}

fn part2(input: &String) -> usize {
  let lines: Vec<&str> = input.lines().collect();

  let forest = parse_input(lines);

  return find_scenic(forest);
}

pub fn run_problem8() {
  let input = fs::read_to_string("../day8/input.txt")
  .expect("Should have been able to read the file for Day 8");

  println!("Day 8 Results");
  println!("---");
  println!("Part 1: {0}", part1(&input));
  println!("Part 2: {0}", part2(&input));
}