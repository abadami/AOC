import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { compareArrays } from "../compareArrays.ts";
import { NumberArray } from "../types.ts";

Deno.test("Pair 1", () => {
  const valueA: NumberArray = [1, 1, 3, 1, 1];
  const valueB: NumberArray = [1, 1, 5, 1, 1];

  assertEquals(compareArrays(valueA, valueB), true);
});

Deno.test("Pair 2", () => {
  const valueA: NumberArray = [[1], [2, 3, 4]];
  const valueB: NumberArray = [[1], 4];

  assertEquals(compareArrays(valueA, valueB), true);
});

Deno.test("Pair 3", () => {
  const valueA: NumberArray = [9];
  const valueB: NumberArray = [[8, 7, 6]];

  assertEquals(compareArrays(valueA, valueB), false);
});

Deno.test("Pair 4", () => {
  const valueA: NumberArray = [[4, 4], 4, 4];
  const valueB: NumberArray = [[4, 4], 4, 4, 4];

  assertEquals(compareArrays(valueA, valueB), true);
});

Deno.test("Pair 5", () => {
  const valueA: NumberArray = [7, 7, 7, 7];
  const valueB: NumberArray = [7, 7, 7];

  assertEquals(compareArrays(valueA, valueB), false);
});

Deno.test("Pair 6", () => {
  const valueA: NumberArray = [];
  const valueB: NumberArray = [3];

  assertEquals(compareArrays(valueA, valueB), true);
});

Deno.test("Pair 7", () => {
  const valueA: NumberArray = [[[]]];
  const valueB: NumberArray = [[]];

  assertEquals(compareArrays(valueA, valueB), false);
});

Deno.test("Pair 8", () => {
  const valueA: NumberArray = [1, [2, [3, [4, [5, 6, 7]]]], 8, 9];
  const valueB: NumberArray = [1, [2, [3, [4, [5, 6, 0]]]], 8, 9];

  assertEquals(compareArrays(valueA, valueB), true);
});
