import { RecursiveArray } from "./types.ts";

export const parseInput = (input: string) => {
  const lines = input.split(/\r?\n/).filter((line) => line !== "");

  return lines.map((line) => parseLine(line));
};

export const parseLine = (input: string) => JSON.parse(input);

export const calculateIndices = (results: number[]) =>
  results.reduce(
    (prev, current, index) => prev + (current < 0 ? index + 1 : 0),
    0
  );

export const findDividers = (value: number) => (array: RecursiveArray) => {
  if (Array.isArray(array) && array.length === 1) {
    if (Array.isArray(array[0]) && array[0].length === 1) {
      return array[0][0] === value;
    }
  }
};
