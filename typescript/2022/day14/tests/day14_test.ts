import { assertArrayIncludes } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { Point } from "../type.ts";
import { pointsBetweenTwo } from "../utils.ts";

Deno.test("Points Between Two, Y + 1", () => {
  const valueA: Point = [2, 4];
  const valueB: Point = [2, 8];

  const shouldHave = [
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
  ];

  const alue = pointsBetweenTwo(valueA, valueB);

  console.log(alue);

  assertArrayIncludes(alue, shouldHave, "Going Up Failed");
});

Deno.test("Points Between Two, Y - 1", () => {
  const valueA: Point = [2, 8];
  const valueB: Point = [2, 4];

  const shouldHave = [
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
  ];

  const alue = pointsBetweenTwo(valueA, valueB);

  console.log(alue);

  assertArrayIncludes(alue, shouldHave, "Going Down Failed");
});

Deno.test("Points Between Two, X + 1", () => {
  const valueA: Point = [4, 2];
  const valueB: Point = [8, 2];

  const shouldHave = [
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
  ];

  const alue = pointsBetweenTwo(valueA, valueB);

  console.log(alue);

  assertArrayIncludes(alue, shouldHave, "Going Right Failed");
});

Deno.test("Points Between Two, X - 1", () => {
  const valueA: Point = [8, 2];
  const valueB: Point = [4, 2];

  const shouldHave = [
    [4, 2],
    [5, 2],
    [6, 2],
    [7, 2],
    [8, 2],
  ];

  const alue = pointsBetweenTwo(valueA, valueB);

  console.log(alue);

  assertArrayIncludes(alue, shouldHave, "Going Left Failed");
});
