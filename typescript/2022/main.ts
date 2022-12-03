import { part1 as day1Part1, part2 as day1Part2 } from "./day1/day1.ts";
import { part1 as day2Part1, part2 as day2Part2 } from "./day2/day2.ts";
import { part1 as day3Part1, part2 as day3Part2 } from "./day3/day3.ts";

console.log(`--2022 day 01 solution--`);
const day1Input = Deno.readTextFileSync("./day1/input.txt");
console.log(`Part 1: ${day1Part1(day1Input)}`);
console.log(`Part 2: ${day1Part2(day1Input)}`);

console.log(`--2022 day 02 solution--`);
const day2Input = Deno.readTextFileSync("./day2/input.txt");
console.log(`Part 1: ${day2Part1(day2Input)}`);
console.log(`Part 2: ${day2Part2(day2Input)}`);

console.log(`--2022 day 03 solution--`);
const day3Input = Deno.readTextFileSync("./day3/input.txt");
console.log(`Part 1: ${day3Part1(day3Input)}`);
console.log(`Part 2: ${day3Part2(day3Input)}`);
