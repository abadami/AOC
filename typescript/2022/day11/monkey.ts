import { runOperation } from "./utils.ts";

export type Operation = "+" | "*";

export class Monkey {
  label: string;
  items: number[];
  operation: Operation;
  leftValue: string;
  rightValue: string;
  divisibleBy: number;
  trueChoice: number;
  falseChoice: number;
  total = 0;

  constructor(
    label: string,
    items: number[],
    operation: Operation,
    leftValue: string,
    rightValue: string,
    divisibleBy: number,
    trueChoice: number,
    falseChoice: number
  ) {
    this.label = label;
    this.items = items;
    this.operation = operation;
    this.leftValue = leftValue;
    this.rightValue = rightValue;
    this.divisibleBy = divisibleBy;
    this.trueChoice = trueChoice;
    this.falseChoice = falseChoice;
  }

  printValues() {
    console.log(this.label);
    console.log(`Items: ${this.items}`);
    console.log(`Operation: ${this.operation}`);
    console.log(`Left Value: ${this.leftValue}`);
    console.log(`Right Value: ${this.rightValue}`);
    console.log(`Divisible By: ${this.divisibleBy}`);
    console.log(`When true, pass to: ${this.trueChoice}`);
    console.log(`When false, pass to: ${this.falseChoice}`);
  }

  inspectItems(choices: Monkey[], anxiety: boolean, moduloValue: number) {
    while (this.items.length > 0) {
      // Monkey inspects item
      let item: number = this.items.shift() as number;

      const left = this.leftValue === "old" ? item : parseInt(this.leftValue);
      const right =
        this.rightValue === "old" ? item : parseInt(this.rightValue);

      // Worry level increases
      item = runOperation(left, this.operation, right);

      // Monkey bored! Worry level decreases
      if (!anxiety) {
        item = Math.floor(item / 3);
      }

      if (item % this.divisibleBy === 0) {
        choices[this.trueChoice].items.push(item % moduloValue);
      } else {
        choices[this.falseChoice].items.push(item % moduloValue);
      }

      this.total = this.total + 1;
    }
  }
}
