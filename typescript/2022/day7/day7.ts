interface TreeNode {
  parent: TreeNode | null;
  size: number;
  nodes: TreeNode[];
  label: string;
}

const initializeTree = (input: string[]) => {
  const startingNode: TreeNode = {
    parent: null,
    size: 0,
    nodes: [],
    label: "/",
  };

  let currentNode = startingNode;

  input.forEach((command) => {
    const commandPieces = command.replace("$", "").trimStart().split(" ");

    if (commandPieces[0] === "ls" || command === "$ cd /") {
      return;
    } else if (commandPieces[0] === "cd") {
      const newDir = commandPieces[1];
      const newNode = currentNode.nodes.find((node) => node.label === newDir);

      if (commandPieces[1] === "..") {
        currentNode = currentNode.parent as TreeNode;
      } else if (newNode) {
        currentNode = newNode;
      } else {
        console.error(`Command ${command} could not be completed`);
      }
    } else {
      const newNode: TreeNode = {
        parent: currentNode,
        size: commandPieces[0] === "dir" ? 0 : parseInt(commandPieces[0]),
        nodes: [],
        label: commandPieces[1],
      };

      currentNode.nodes.push(newNode);
    }
  });

  return startingNode;
};

const part1AppropriateSizes: number[] = [];
const part2AppropriateSizes: TreeNode[] = [];

const traversal = (node: TreeNode, size: number, isPart1: boolean) => {
  node.nodes.forEach((treeNode) => traversal(treeNode, size, isPart1));

  if (node.nodes.length === 0) {
    return;
  }

  if (isPart1 && node.size <= size) {
    part1AppropriateSizes.push(node.size);
  } else {
    part2AppropriateSizes.push(node);
  }
};

const calculateSize = (node: TreeNode): number => {
  const size =
    node.size +
    node.nodes.reduce(
      (prev, current) =>
        current.nodes.length > 0
          ? prev + calculateSize(current)
          : prev + current.size,
      0
    );

  node.size = size;

  return size;
};

export const part1 = (input: string) => {
  const scenarios = input.split("\r\n");

  const tree = initializeTree(scenarios);

  calculateSize(tree);

  traversal(tree, 100000, true);

  return part1AppropriateSizes.reduce((prev, current) => prev + current, 0);
};

export const part2 = (input: string) => {
  const scenarios = input.split("\r\n");

  const tree = initializeTree(scenarios);

  calculateSize(tree);

  const remainder = 70000000 - tree.size;

  const needed = 30000000 - remainder;

  traversal(tree, needed, false);

  let smallest = Number.MAX_VALUE;

  part2AppropriateSizes.forEach((node) => {
    const currentSize = node.size;

    if (currentSize > needed && currentSize < smallest) {
      smallest = currentSize;
    }
  });

  return smallest;
};
