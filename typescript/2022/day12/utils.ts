import { GraphNode } from "./types.ts";

export const findNextValue = (value: string) => {
  if (value === "S") return "a";

  if (value === "E") return "";

  if (value === "z") return "E";

  return String.fromCharCode(value.charCodeAt(0) + 1);
};

export const createGraphFromMatrix = (matrix: string[][]) => {
  const nodes: GraphNode[] = [];

  matrix.forEach((row, rowIndex) => {
    row.forEach((value, columnIndex) => {
      const node: GraphNode = {
        label: value,
        position: [rowIndex, columnIndex],
        edges: [],
      };

      const nextValue = findNextValue(value);

      if (
        rowIndex !== 0 &&
        matrix[rowIndex - 1][columnIndex].charCodeAt(0) <=
          nextValue.charCodeAt(0)
      ) {
        node.edges.push([rowIndex - 1, columnIndex]);
      }

      if (
        rowIndex !== matrix.length - 1 &&
        matrix[rowIndex + 1][columnIndex].charCodeAt(0) ===
          nextValue.charCodeAt(0)
      ) {
        node.edges.push([rowIndex + 1, columnIndex]);
      }

      if (
        columnIndex !== 0 &&
        matrix[rowIndex][columnIndex - 1].charCodeAt(0) <=
          nextValue.charCodeAt(0)
      ) {
        node.edges.push([rowIndex, columnIndex - 1]);
      }

      if (
        columnIndex !== row.length - 1 &&
        matrix[rowIndex][columnIndex + 1].charCodeAt(0) <=
          nextValue.charCodeAt(0)
      ) {
        node.edges.push([rowIndex, columnIndex + 1]);
      }

      nodes.push(node);
    });
  });

  return nodes;
};
