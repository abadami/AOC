// Not a perfect solution, I think the last pixel for the CRT has a chance to be wrong
// not sure what causes it yet, but the answer is visible so no problemo I guess
// Maybe I'll fix it someday

export class CPU {
  X = 1;
  cycle = 1;
  ticks: number[] = [1];

  constructor() {}

  parseCommand(command: string) {
    const commandParts = command.split(" ");

    if (commandParts[0] === "noop") {
      this.noop();
    } else if (commandParts[0] === "addx") {
      const number = parseInt(commandParts[1]);
      this.addX(number);
    }
  }

  noop() {
    this.cycle += 1;
    this.ticks.push(this.X);
  }

  addX(number: number) {
    this.cycle += 2;
    this.ticks.push(this.X);
    this.ticks.push(this.X);
    this.X += number;
  }

  getSignalStrengths() {
    const cycle20 = this.ticks[20] * 20;
    const cycle60 = this.ticks[60] * 60;
    const cycle100 = this.ticks[100] * 100;
    const cycle140 = this.ticks[140] * 140;
    const cycle180 = this.ticks[180] * 180;
    const cycle220 = this.ticks[220] * 220;

    return cycle20 + cycle60 + cycle100 + cycle140 + cycle180 + cycle220;
  }

  getCRTScreen() {
    const CRTSetup: string[][] = [[], [], [], [], [], []];

    for (let i = 0; i < 240; i++) {
      const index = Math.floor(i / 40);
      const cycle = i + 1;
      const spritePosition = cycle % 40;
      if (
        spritePosition >= this.ticks[cycle] &&
        spritePosition <= this.ticks[cycle] + 2
      ) {
        CRTSetup[index].push("#");
      } else {
        CRTSetup[index].push(".");
      }
    }

    const CRT = CRTSetup.map((line) => line.join(""));

    return CRT;
  }
}

export const part1 = (input: string) => {
  const instructions = input.split(/\r?\n/);

  const part1CPU = new CPU();

  instructions.forEach((instruction) => part1CPU.parseCommand(instruction));

  return part1CPU.getSignalStrengths();
};

export const part2 = (input: string) => {
  const instructions = input.split(/\r?\n/);

  const part1CPU = new CPU();

  instructions.forEach((instruction) => part1CPU.parseCommand(instruction));

  return part1CPU.getCRTScreen();
};
