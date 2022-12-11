import { Monkey, Operation } from "./monkey.ts";
import {
  parseDivisible,
  parseLabel,
  parseOperation,
  parseResult,
  parseStartingItems,
} from "./utils.ts";

export const part1 = (input: string) => {
  const lines = input.split(/\r?\n/);

  const monkeys: Monkey[] = [];

  for (let i = 0; i < lines.length; i = i + 7) {
    const label = parseLabel(lines[i]);
    const startingItems = parseStartingItems(lines[i + 1]);
    const [left, operation, right] = parseOperation(lines[i + 2]);
    const divisible = parseDivisible(lines[i + 3]);
    const whenTrue = parseResult(lines[i + 4], true);
    const whenFalse = parseResult(lines[i + 5], false);

    const newMonkey = new Monkey(
      label,
      startingItems,
      operation as Operation,
      left,
      right,
      divisible,
      whenTrue,
      whenFalse
    );

    monkeys.push(newMonkey);
  }

  const moduloValue = monkeys.reduce(
    (prevMonkey, currentMonkey) => prevMonkey * currentMonkey.divisibleBy,
    1
  );

  for (let i = 0; i < 20; i++) {
    monkeys.forEach((monkey) => {
      monkey.inspectItems(monkeys, false, moduloValue);
    });
  }

  monkeys.sort((a, b) => (a.total > b.total ? -1 : 1));

  return monkeys[0].total * monkeys[1].total;
};

export const part2 = (input: string) => {
  const lines = input.split(/\r?\n/);

  const monkeys: Monkey[] = [];

  for (let i = 0; i < lines.length; i = i + 7) {
    const label = parseLabel(lines[i]);
    const startingItems = parseStartingItems(lines[i + 1]);
    const [left, operation, right] = parseOperation(lines[i + 2]);
    const divisible = parseDivisible(lines[i + 3]);
    const whenTrue = parseResult(lines[i + 4], true);
    const whenFalse = parseResult(lines[i + 5], false);

    const newMonkey = new Monkey(
      label,
      startingItems,
      operation as Operation,
      left,
      right,
      divisible,
      whenTrue,
      whenFalse
    );

    monkeys.push(newMonkey);
  }

  const moduloValue = monkeys.reduce(
    (prevMonkey, currentMonkey) => prevMonkey * currentMonkey.divisibleBy,
    1
  );

  for (let i = 0; i < 10000; i++) {
    monkeys.forEach((monkey) => {
      monkey.inspectItems(monkeys, true, moduloValue);
    });
  }

  monkeys.sort((a, b) => (a.total > b.total ? -1 : 1));

  return monkeys[0].total * monkeys[1].total;
};
