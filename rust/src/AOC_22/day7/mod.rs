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
              let new_previous_index = self
              .edges
              .iter()
              .position(|edge| edge.target_node == previous_node_index)
              .unwrap_or_default();

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
}



fn part1(input: &str) -> i64 {
  let mut directory = Graph::new();

  directory.initialize_tree(input);

  for node in directory.nodes.iter() {
    println!("Name: {0}, size: {1}, Is Directory? {2}", node.name, node.size, node.is_dir);
  }

  for edge in directory.edges.iter() {
    let main_node = &directory.nodes[edge.main_node];
    let target_node = &directory.nodes[edge.target_node];
    println!("Main: {0}, Target: {1}", main_node.name, target_node.name);
  }

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