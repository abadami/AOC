import { Graph } from "./Graph.ts";
import { GraphNode } from "./types.ts";

export const part1 = (input: string) => {
  const matrix = input.split(/\r?\n/).map((line) => line.split(""));

  const graph = new Graph(matrix);

  const endNode = graph.nodes.find((node) => node.label === "E") as GraphNode;

  const distanceMatrix = graph.breadthFirstSearch();

  return distanceMatrix[endNode.position[0]][endNode.position[1]];
};

export const part2 = (input: string) => {
  return "Not implemented";
};
