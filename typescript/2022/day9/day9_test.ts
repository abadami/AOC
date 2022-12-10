// url_test.ts
import {
  assertArrayIncludes,
  assertEquals,
} from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { part1, part2, RopeMap } from "./day9.ts";

Deno.test("Map Test: Down 2", () => {
  const map = new RopeMap(2);

  map.moveHead("D");
  map.moveHead("D");

  const correctPositions = ["0-0", "0--1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Up 2", () => {
  const map = new RopeMap(2);

  map.moveHead("U");
  map.moveHead("U");

  const correctPositions = ["0-0", "0-1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Right 2", () => {
  const map = new RopeMap(2);

  map.moveHead("R");
  map.moveHead("R");

  const correctPositions = ["0-0", "1-0"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Left 2", () => {
  const map = new RopeMap(2);

  map.moveHead("L");
  map.moveHead("L");

  const correctPositions = ["0-0", "-1-0"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Right-Up Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("R");
  map.moveHead("U");
  map.moveHead("U");

  const correctPositions = ["0-0", "1-1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Right-Up Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("L");
  map.moveHead("U");
  map.moveHead("U");

  const correctPositions = ["0-0", "-1-1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Up-Left Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("U");
  map.moveHead("L");
  map.moveHead("L");

  const correctPositions = ["0-0", "-1-1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Down-Left Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("D");
  map.moveHead("L");
  map.moveHead("L");

  const correctPositions = ["0-0", "-1--1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Left-Down Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("L");
  map.moveHead("D");
  map.moveHead("D");

  const correctPositions = ["0-0", "-1--1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Right-Down Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("R");
  map.moveHead("D");
  map.moveHead("D");

  const correctPositions = ["0-0", "1--1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Down-Right Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("D");
  map.moveHead("R");
  map.moveHead("R");

  const correctPositions = ["0-0", "1--1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Map Test: Up-Right Diagonal", () => {
  const map = new RopeMap(2);

  map.moveHead("U");
  map.moveHead("R");
  map.moveHead("R");

  const correctPositions = ["0-0", "1-1"];
  const actualPositions: string[] = [];

  map.tailPositions.forEach((position) => {
    actualPositions.push(position);
  });

  assertArrayIncludes(correctPositions, actualPositions);
});

Deno.test("Part 1: Example Input", () => {
  const example = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;

  const count = part1(example);

  assertEquals(count, 13);
});

Deno.test("Part 1: My Input", () => {
  const example = `D 3
L 1
U 1
R 2
D 1
R 2
U 1
R 1
U 2
L 2
U 1
L 1
U 2
R 3
D 1
R 3
D 5
L 1
D 7
L 2
U 2
R 1
D 1
R 3`;

  const count = part1(example);

  assertEquals(count, 30);
});

Deno.test("Part 1: Ring Around", () => {
  const example = `U 1
L 1
D 1
D 1
R 1
R 1
U 1
U 1
L 1
D 1
`;

  const count = part1(example);

  assertEquals(count, 1);
});

Deno.test("Part 2: Test", () => {
  const example = `R 5
U 8
L 8
D 3
R 17
D 10
L 25
U 20`;

  const count = part2(example);

  assertEquals(count, 36);
});
