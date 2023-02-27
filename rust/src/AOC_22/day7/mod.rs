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
  fn new_node(&mut self, name: &str, size: i32, is_dir: bool) {
    self.nodes.push(Node {
      name: String::from_str(name).unwrap_or_default(),
      size,
      is_dir
    });
  }

  fn new_edge(&mut self, main: NodeIndex, target: NodeIndex) {
    self.edges.push(Edge {
      main_node: main,
      target_node: target
    })
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