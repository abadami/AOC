use std::str::FromStr;

pub type NodeIndex = usize;

pub struct Node {
  pub name: String,
  pub is_dir: bool,
  pub size: i32
}

pub struct Edge {
  pub main_node: NodeIndex,
  pub target_node: NodeIndex
}

pub struct Graph {
  pub nodes: Vec<Node>,
  pub edges: Vec<Edge>
}

impl Graph {
  pub fn new() -> Self {
    Graph {
      nodes: Vec::<Node>::new(),
      edges: Vec::<Edge>::new()
    }
  }

  pub fn new_node(&mut self, name: &str, size: i32, is_dir: bool) -> NodeIndex {
    let index = self.nodes.len();
    
    self.nodes.push(Node {
      name: String::from_str(name).unwrap_or_default(),
      size,
      is_dir
    });

    index
  }

  pub fn new_edge(&mut self, main: NodeIndex, target: NodeIndex) -> NodeIndex {
    let index = self.edges.len();
    
    self.edges.push(Edge {
      main_node: main,
      target_node: target
    });

    index
  }
}