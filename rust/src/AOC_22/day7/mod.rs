use std::{fs, str::FromStr};

type NodeIndex = usize;

struct Node {
  name: String,
  is_dir: bool,
  size: i32
}

struct Edge {
  main_node: NodeIndex,
  target_node: NodeIndex
}

struct Graph {
  nodes: Vec<Node>,
  edges: Vec<Edge>
}

impl Graph {
  fn new() -> Self {
    Graph {
      nodes: Vec::<Node>::new(),
      edges: Vec::<Edge>::new()
    }
  }

  fn new_node(&mut self, name: &str, size: i32, is_dir: bool) -> NodeIndex {
    let index = self.nodes.len();
    
    self.nodes.push(Node {
      name: String::from_str(name).unwrap_or_default(),
      size,
      is_dir
    });

    index
  }

  fn new_edge(&mut self, main: NodeIndex, target: NodeIndex) -> NodeIndex {
    let index = self.edges.len();
    
    self.edges.push(Edge {
      main_node: main,
      target_node: target
    });

    index
  }

  fn initialize_tree(&mut self, input: &str) {
    let mut current_node: NodeIndex = 0;

    for command in input.lines().into_iter() {
      let modified_command = command.replace("$", "");
      let command_pieces: Vec<&str> = modified_command.trim_start().split(" ").collect();
  
      if modified_command == "cd /" {
        continue;
      }

      match command_pieces[0] {
        "dir" => {
          todo!();
        },
        "cd" => {
          todo!();
        },
        "ls" => {
          continue
        },
        _ => {
          todo!();
        }
      }

    }
  }
}



fn part1(input: &str) -> i64 {
  



  0
}

fn part2(input: &str) -> i64 {
  0
}

pub fn run_problem7() {
  let input = fs::read_to_string("./src/AOC_22/day7/input.txt")
  .expect("Should have been able to read the file for Day 7");

  println!("Day 7 Results");
  println!("---");
  println!("Part 1: {0}", part1(&input));
  println!("Part 2: {0}", part2(&input));
}