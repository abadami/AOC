import { part1, part2 } from "./day1/day1.ts";

console.log(`--2022 day 01 solution--`);
const input = Deno.readTextFileSync("./day1/input.txt");
console.log(`Part 1: ${part1(input)}`);
console.log(`Part 2: ${part2(input)}`);
