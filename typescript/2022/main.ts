import { part1 as day1Part1, part2 as day1Part2 } from "./day1/day1.ts";
import { part1 as day2Part1, part2 as day2Part2 } from "./day2/day2.ts";
import { part1 as day3Part1, part2 as day3Part2 } from "./day3/day3.ts";
import { part1 as day4Part1, part2 as day4Part2 } from "./day4/day4.ts";
import { part1 as day8Part1, part2 as day8Part2 } from "./day8/day8.ts";
import { part1 as day9Part1, part2 as day9Part2 } from "./day9/day9.ts";

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

console.log(`--2022 day 08 solution--`);
const day8Input = Deno.readTextFileSync("./day8/input.txt");
console.log(`Part 1: ${day8Part1(day8Input)}`);
console.log(`Part 2: ${day8Part2(day8Input)}`);

console.log(`--2022 day 09 solution--`);
const day9Input = Deno.readTextFileSync("./day9/input.txt");
console.log(`Part 1: ${day9Part1(day9Input)}`);
console.log(`Part 2: ${day9Part2(day9Input)}`);
