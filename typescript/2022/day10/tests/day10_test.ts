import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { CPU, part1 } from "../day10.ts";

Deno.test("Part 1: Should have the correct X value and Cycle", () => {
  const exampleCPU = new CPU();

  exampleCPU.noop();
  exampleCPU.addX(3);
  exampleCPU.addX(-5);

  console.log(exampleCPU.ticks);

  assertEquals(exampleCPU.cycle, 6);
  assertEquals(exampleCPU.X, -1);
});

Deno.test("Part 1: Should have the correct six signal strengths", () => {
  const input = Deno.readTextFileSync("./day10/tests/input_example.txt");

  assertEquals(part1(input), 13140);
});
