import { GraphNode } from "./types.ts";

export const findNextValue = (value: string) => {
  if (value === "S") return "a";

  if (value === "E") return "";

  if (value === "z") return "E";

  return String.fromCharCode(value.charCodeAt(0) + 1);
};

export const checkValidTravel = (valueA: string, valueB: string) => {
  if (valueA === "z" && valueB === "E") return true;

  if (valueA === "S" && valueB === "a") return true;

  if (valueA === "S" && valueB !== "a") return false;

  if (valueB === "E" && valueA !== "z") return false;

  return valueA.charCodeAt(0) + 1 >= valueB.charCodeAt(0);
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

      if (
        rowIndex !== 0 &&
        checkValidTravel(node.label, matrix[rowIndex - 1][columnIndex])
      ) {
        node.edges.push([rowIndex - 1, columnIndex]);
      }

      if (
        rowIndex !== matrix.length - 1 &&
        checkValidTravel(node.label, matrix[rowIndex + 1][columnIndex])
      ) {
        node.edges.push([rowIndex + 1, columnIndex]);
      }

      if (
        columnIndex !== 0 &&
        checkValidTravel(node.label, matrix[rowIndex][columnIndex - 1])
      ) {
        node.edges.push([rowIndex, columnIndex - 1]);
      }

      if (
        columnIndex !== row.length - 1 &&
        checkValidTravel(node.label, matrix[rowIndex][columnIndex + 1])
      ) {
        node.edges.push([rowIndex, columnIndex + 1]);
      }

      nodes.push(node);
    });
  });

  return nodes;
};
