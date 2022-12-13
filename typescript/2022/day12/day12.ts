import { Graph } from "./Graph.ts";
import { GraphNode } from "./types.ts";

export const part1 = (input: string) => {
  const matrix = input.split(/\r?\n/).map((line) => line.split(""));

  const graph = new Graph(matrix);

  const startNode = graph.nodes.find((node) => node.label === "S") as GraphNode;
  const endNode = graph.nodes.find((node) => node.label === "E") as GraphNode;

  const distanceMatrix = graph.breadthFirstSearch(startNode);

  return distanceMatrix[endNode.position[0]][endNode.position[1]];
};

export const part2 = (input: string) => {
  const matrix = input.split(/\r?\n/).map((line) => line.split(""));

  const graph = new Graph(matrix);

  const startingNodes = graph.nodes.filter((node) => node.label === "a");
  const endNode = graph.nodes.find((node) => node.label === "E") as GraphNode;

  let lowest = Number.MAX_SAFE_INTEGER;

  startingNodes.forEach((startingNode) => {
    const newDistanceMatrix = graph.breadthFirstSearch(startingNode);

    const distance =
      newDistanceMatrix[endNode.position[0]][endNode.position[1]];

    if (distance < lowest) {
      lowest = distance;
    }
  });

  return lowest;
};
