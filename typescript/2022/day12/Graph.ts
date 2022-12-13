import { Edge, GraphNode } from "./types.ts";
import { createGraphFromMatrix } from "./utils.ts";

export class Graph {
  nodes: GraphNode[];
  rowLength: number;
  columnLength: number;

  constructor(matrix: string[][]) {
    this.columnLength = matrix.length;
    this.rowLength = matrix[0].length;
    this.nodes = createGraphFromMatrix(matrix);
  }

  breadthFirstSearch(startingNode: GraphNode) {
    const visited: Edge[] = [];

    const queue: GraphNode[] = [];
    const previous: Edge[][] = [];
    const distance: number[][] = [];

    const start = this.nodes.find((node) => node.label === "S") as GraphNode;

    visited.push(start.position);

    for (let i = 0; i < this.columnLength; i++) {
      previous.push([]);
      distance.push([]);
      for (let j = 0; j < this.rowLength; j++) {
        previous[i][j] = [-1, -1];
        distance[i][j] = Number.MAX_SAFE_INTEGER;
      }
    }

    distance[startingNode.position[0]][startingNode.position[1]] = 0;

    queue.push(startingNode);

    while (queue.length > 0) {
      const currentNode = queue.shift() as GraphNode;

      currentNode.edges.forEach((edge) => {
        if (
          !visited.find(
            (visitedEdge) =>
              visitedEdge[0] === edge[0] && visitedEdge[1] === edge[1]
          )
        ) {
          visited.push(edge);
          const node = this.nodes.find(
            (node) =>
              node.position[0] === edge[0] && node.position[1] === edge[1]
          ) as GraphNode;
          queue.push(node);

          const newDistance =
            distance[currentNode.position[0]][currentNode.position[1]] + 1;

          if (newDistance < distance[edge[0]][edge[1]]) {
            previous[edge[0]][edge[1]] = currentNode.position;
            distance[edge[0]][edge[1]] = newDistance;
          }

          if (currentNode.label === "E") {
            console.log("Working");
            return distance;
          }
        }
      });
    }

    return distance;
  }
}
