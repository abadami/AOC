use std::{fs, str::FromStr};
use super::super::aoc_utils::{Graph, NodeIndex};

impl Graph {
  fn initialize_tree(&mut self, input: &str) {
    let mut current_node_index: NodeIndex = 0;
    let mut previous_node_index: NodeIndex = 0;

    for command in input.lines().into_iter() {
      let modified_command = command.replace("$", "");
      let command_pieces: Vec<&str> = modified_command.trim_start().split(" ").collect();
  
      if command_pieces[0] == "cd" && command_pieces[1] == "/" {
        self.new_node("/", 0, true);
        continue;
      }

      match command_pieces[0] {
        "dir" => {
          let new_index = self.new_node(command_pieces[1], 0, true);
          self.new_edge(current_node_index, new_index);
        },
        "cd" => {
          match command_pieces[1] {
            ".." => {
              let new_previous = self
              .edges
              .iter()
              .find(|edge| edge.target_node == previous_node_index);

              let new_previous_index = match new_previous {
                None => 0,
                Some(edge) => edge.main_node
              };

              current_node_index = previous_node_index;
              previous_node_index = new_previous_index;
            },
            val => {
              let new_current_index = self
              .nodes
              .iter()
              .position(|node| node.name == val)
              .unwrap_or_default();

              previous_node_index = current_node_index;
              current_node_index = new_current_index;
            }
          };
        },
        "ls" => {
          continue
        },
        _ => {
          let new_index = self.new_node(command_pieces[1], command_pieces[0].parse().unwrap_or(-1), false);
          self.new_edge(current_node_index, new_index);
        }
      }

    }
  }

  fn calculate_node_size(&self, node_index: NodeIndex) -> i32 {
    let filtered = self.edges.iter().filter(|edge| edge.main_node == node_index);
    let mut new_size = 0;

    for edge in filtered {
      let node = &self.nodes[edge.target_node];

      let size = match node.is_dir {
        true => self.calculate_node_size(edge.target_node),
        false => node.size
      };

      new_size += size;
    }

    new_size
  }
}

fn part1(input: &str) -> i32 {
  let mut directory = Graph::new();

  directory.initialize_tree(input);

  for index in 0..directory.nodes.len() {
    if directory.nodes[index].is_dir {
      directory.nodes[index].size = directory.calculate_node_size(index);
    }
  }

  let mut answer = 0;

  for node in directory.nodes {
    if node.is_dir && node.size <= 100000 {
      answer += node.size;
    }
  }

  answer
}

fn part2(input: &str) -> i32 {
  let mut directory = Graph::new();

  directory.initialize_tree(input);

  for index in 0..directory.nodes.len() {
    if directory.nodes[index].is_dir {
      directory.nodes[index].size = directory.calculate_node_size(index);
    }
  }

  let system_size = directory.nodes[0].size;
  let system_remainder = 70000000 - system_size;
  let needed_size = 30000000 - system_remainder;

  directory.nodes.sort_by(|a, b| a.size.cmp(&b.size));

  println!("System Current: {0}, Remaining Space: {1}, Needed: {2}", system_size, system_remainder, needed_size);

  let mut answer = i32::MAX;

  for node in directory.nodes {
    if node.is_dir && node.size > needed_size && node.size < answer {
      answer = node.size;
      break;
    }
  }

  answer
}

pub fn run_problem7() {
  let input = fs::read_to_string("../day7/input.txt")
  .expect("Should have been able to read the file for Day 7");

  println!("Day 7 Results");
  println!("---");
  println!("Part 1: {0}", part1(&input));
  println!("Part 2: {0}", part2(&input));
}