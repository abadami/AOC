import { part1, part2 } from "./day1/day1.ts";

console.log(`--2022 day 01 solution--`);
const day1Input = Deno.readTextFileSync("./day1/input.txt");
console.log(`Part 1: ${part1(day1Input)}`);
console.log(`Part 2: ${part2(day1Input)}`);

console.log(`--2022 day 02 solution--`);
const day2Input = Deno.readTextFileSync("./day2/input.txt");
console.log(`Part 1: ${part1(day2Input)}`);
console.log(`Part 2: ${part2(day2Input)}`);
