import { compareArraysRecursion } from "./compareArrays.ts";
import { RecursiveArray } from "./types.ts";
import { calculateIndices, findDividers, parseInput } from "./utils.ts";

export const part1 = (input: string) => {
  const arrays = parseInput(input);

  const tests: number[] = [];

  for (let i = 0; i < arrays.length; i = i + 2) {
    const valueA = arrays[i];
    const valueB = arrays[i + 1];

    tests.push(compareArraysRecursion(valueA, valueB) as number);
  }

  console.log(tests);

  return calculateIndices(tests);
};

export const part2 = (input: string) => {
  const arrays: RecursiveArray = parseInput(input);

  arrays.push([[2]]);
  arrays.push([[6]]);

  arrays.sort(
    compareArraysRecursion as (a: RecursiveArray, b: RecursiveArray) => number
  );

  const indexTwo = arrays.findIndex(findDividers(2)) + 1;
  const indexSix = arrays.findIndex(findDividers(6)) + 1;

  return indexTwo * indexSix;
};
