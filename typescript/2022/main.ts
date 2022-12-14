import { part1 as day1Part1, part2 as day1Part2 } from "./day1/day1.ts";
import { part1 as day2Part1, part2 as day2Part2 } from "./day2/day2.ts";
import { part1 as day3Part1, part2 as day3Part2 } from "./day3/day3.ts";
import { part1 as day4Part1, part2 as day4Part2 } from "./day4/day4.ts";
import { part1 as day5Part1, part2 as day5Part2 } from "./day5/day5.ts";
import { part1 as day6Part1, part2 as day6Part2 } from "./day6/day6.ts";
import { part1 as day7Part1, part2 as day7Part2 } from "./day7/day7.ts";
import { part1 as day8Part1, part2 as day8Part2 } from "./day8/day8.ts";
import { part1 as day9Part1, part2 as day9Part2 } from "./day9/day9.ts";
import { part1 as day10Part1, part2 as day10Part2 } from "./day10/day10.ts";
import { part1 as day11Part1, part2 as day11Part2 } from "./day11/day11.ts";
import { part1 as day12Part1, part2 as day12Part2 } from "./day12/day12.ts";
import { part1 as day13Part1, part2 as day13Part2 } from "./day13/day13.ts";

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

console.log(`--2022 day 05 solution--`);
const day5Input = Deno.readTextFileSync("./day4/input.txt");
console.log(`Part 1: ${day5Part1(day5Input)}`);
console.log(`Part 2: ${day5Part2(day5Input)}`);

console.log(`--2022 day 6 solution--`);
const day6Input = Deno.readTextFileSync("./day6/input.txt");
console.log(`Part 1: ${day6Part1(day6Input)}`);
console.log(`Part 2: ${day6Part2(day6Input)}`);

console.log(`--2022 day 07 solution--`);
const day7Input = Deno.readTextFileSync("./day7/input.txt");
console.log(`Part 1: ${day7Part1(day7Input)}`);
console.log(`Part 2: ${day7Part2(day7Input)}`);

console.log(`--2022 day 08 solution--`);
const day8Input = Deno.readTextFileSync("./day4/input.txt");
console.log(`Part 1: ${day8Part1(day8Input)}`);
console.log(`Part 2: ${day8Part2(day8Input)}`);

console.log(`--2022 day 09 solution--`);
const day9Input = Deno.readTextFileSync("./day9/input.txt");
console.log(`Part 1: ${day9Part1(day9Input)}`);
console.log(`Part 2: ${day9Part2(day9Input)}`);

console.log(`--2022 day 10 solution--`);
const day10Input = Deno.readTextFileSync("./day10/input.txt");
console.log(`Part 1: ${day10Part1(day10Input)}`);
console.log(`Part 2:`);

day10Part2(day10Input).forEach((line) => console.log(line));

console.log(`--2022 day 11 solution--`);
const day11Input = Deno.readTextFileSync("./day11/input.txt");
console.log(`Part1: ${day11Part1(day11Input)}`);
console.log(`Part 2: ${day11Part2(day11Input)}`);

console.log(`--2022 day 12 solution--`);
const day12Input = Deno.readTextFileSync("./day12/input.txt");
console.log(`Part 1: ${day12Part1(day12Input)}`);
//TODO: This takes awhile, maybe now is the time to improve the main.ts experience
console.log(`Part 2: ${day12Part2(day12Input)}`);

console.log(`-- 2022 day 13 solution--`);
const day13Input = Deno.readTextFileSync("./day13/input.txt");
console.log(`Part 1: ${day13Part1(day13Input)}`);
console.log(`Part 2: ${day13Part2(day13Input)}`);
