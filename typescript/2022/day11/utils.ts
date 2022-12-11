import { Operation } from "./monkey.ts";

export const parseLabel = (line: string) => line.replace(":", "");

export const parseStartingItems = (line: string) =>
  line
    .replace("Starting items: ", "")
    .split(", ")
    .map((number) => parseInt(number));

export const parseOperation = (line: string) =>
  line
    .replace("Operation: new = ", "")
    .split(" ")
    .filter((item) => item !== "");

export const parseDivisible = (line: string) =>
  parseInt(line.replace("Test: divisible by ", ""));

export const parseResult = (line: string, isTrue: boolean) =>
  parseInt(
    line.replace(`If ${isTrue ? "true" : "false"}: throw to monkey `, "")
  );

export const runOperation = (
  left: number,
  operation: Operation,
  right: number
) => (operation === "*" ? left * right : left + right);
