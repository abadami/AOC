import { part1 as day1Part1, part2 as day1Part2 } from "./day1/day1.ts";
import { part1 as day2Part1, part2 as day2Part2 } from "./day2/day2.ts";
import { part1 as day3Part1, part2 as day3Part2 } from "./day3/day3.ts";
import { part1 as day4Part1, part2 as day4Part2 } from "./day4/day4.ts";
import { part1 as day7Part1, part2 as day7Part2 } from "./day7/day7.ts";

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

console.log(`--2022 day 04 solution--`);
const day4Input = Deno.readTextFileSync("./day4/input.txt");
console.log(`Part 1: ${day4Part1(day4Input)}`);
console.log(`Part 2: ${day4Part2(day4Input)}`);

console.log(`--2022 day 07 solution--`);
const day7Input = Deno.readTextFileSync("./day7/input.txt");
console.log(`Part 1: ${day7Part1(day7Input)}`);
console.log(`Part 2: ${day7Part2(day7Input)}`);
