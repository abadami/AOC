import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { compareArraysRecursion } from "../compareArrays.ts";
import { RecursiveArray } from "../types.ts";

Deno.test("Pair 1", () => {
  const valueA: RecursiveArray = [1, 1, 3, 1, 1];
  const valueB: RecursiveArray = [1, 1, 5, 1, 1];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    -1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 2", () => {
  const valueA: RecursiveArray = [[1], [2, 3, 4]];
  const valueB: RecursiveArray = [[1], 4];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    -1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 3", () => {
  const valueA: RecursiveArray = [9];
  const valueB: RecursiveArray = [[8, 7, 6]];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 4", () => {
  const valueA: RecursiveArray = [[4, 4], 4, 4];
  const valueB: RecursiveArray = [[4, 4], 4, 4, 4];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    -1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 5", () => {
  const valueA: RecursiveArray = [7, 7, 7, 7];
  const valueB: RecursiveArray = [7, 7, 7];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 6", () => {
  const valueA: RecursiveArray = [];
  const valueB: RecursiveArray = [3];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    -1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 7", () => {
  const valueA: RecursiveArray = [[[]]];
  const valueB: RecursiveArray = [[]];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 8", () => {
  const valueA: RecursiveArray = [1, [2, [3, [4, [5, 6, 7]]]], 8, 9];
  const valueB: RecursiveArray = [1, [2, [3, [4, [5, 6, 0]]]], 8, 9];

  assertEquals(
    compareArraysRecursion(valueA, valueB),
    1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 9", () => {
  const valueA: RecursiveArray = [
    [[5, 5, [0, 7, 6, 6, 0]], [], 0, 9],
    [[[0, 7, 3, 10, 5], 5], 7],
    [10, [], 1, [], 5],
  ];
  const valueB: RecursiveArray = [
    [4],
    [2, [10, [5, 7, 8, 7, 0]], [4, 8, [1, 2], [5]], 3, 9],
    [[[3, 3, 3, 5, 4], 5, [], 7, [7, 3, 10, 4, 0]], 9, [3]],
    [2, 0, 6, [9, 5], 8],
    [[4, [9, 8, 6], [], 5], 3, [7, 7, [3, 3, 6], 7, [9, 4, 0, 10, 6]], 10, []],
  ];

  //assertEquals(compareArraysFlat(valueA, valueB), false, "Compare Arrays Flat");
  assertEquals(
    compareArraysRecursion(valueA, valueB),
    1,
    "Compare Arrays Recursive"
  );
});

Deno.test("Pair 10", () => {
  const valueA: RecursiveArray = [
    [],
    [[], 8, 5],
    [4, 9, [[8, 4, 7, 6, 9], [4]], 3, [[0, 3, 4, 3, 1]]],
    [3, 5, [[0, 6, 4], 5, [1, 5, 6], 6, [8, 7, 1, 7]]],
    [1],
  ];
  const valueB: RecursiveArray = [[8]];

  //assertEquals(compareArraysFlat(valueA, valueB), false, "Compare Arrays Flat");
  assertEquals(
    compareArraysRecursion(valueA, valueB),
    -1,
    "Compare Arrays Recursive"
  );
});
