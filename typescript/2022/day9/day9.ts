type Direction = "D" | "U" | "L" | "R";
//2,4 4,3
export class RopeMap {
  //map: string[][];
  ropeLength: number;
  head = [0, 0];
  tails: number[][] = [];
  tailPositions = new Set<string>();
  moves: number[][] = [];

  constructor(ropeLength: number) {
    //this.map = [["s"]];
    for (let i = 1; i < ropeLength; i++) {
      this.tails.push([0, 0]);
    }
    this.ropeLength = ropeLength;
    this.tailPositions.add("0-0");
  }

  moveHead(direction: Direction) {
    if (direction === "U") {
      this.head[1] = this.head[1] + 1;
    } else if (direction === "D") {
      this.head[1] = this.head[1] - 1;
    } else if (direction === "L") {
      this.head[0] = this.head[0] - 1;
    } else if (direction === "R") {
      this.head[0] = this.head[0] + 1;
    }

    this.moves.push([this.head[0], this.head[1]]);

    this.moveTail(0);
  }

  moveTail(index: number) {
    const currentTail = this.tails[index];
    const lastTail = index === 0 ? this.head : this.tails[index - 1];

    const distance = Math.max(
      Math.abs(lastTail[0] - currentTail[0]),
      Math.abs(lastTail[1] - currentTail[1])
    );

    if (distance <= 1) {
      return;
    }

    if (lastTail[0] === currentTail[0]) {
      currentTail[1] =
        lastTail[1] > currentTail[1] ? currentTail[1] + 1 : currentTail[1] - 1;
    } else if (lastTail[1] === currentTail[1]) {
      currentTail[0] =
        lastTail[0] > currentTail[0] ? currentTail[0] + 1 : currentTail[0] - 1;
    } else {
      currentTail[0] =
        lastTail[0] > currentTail[0] ? currentTail[0] + 1 : currentTail[0] - 1;
      currentTail[1] =
        lastTail[1] > currentTail[1] ? currentTail[1] + 1 : currentTail[1] - 1;
    }

    if (index === this.tails.length - 1) {
      this.tailPositions.add(`${currentTail[0]}-${currentTail[1]}`);
    } else {
      this.moveTail(index + 1);
    }
  }

  getTailPositionsCount() {
    return this.tailPositions.size;
  }
}

export const part1 = (input: string) => {
  const instructions = input.split(/\r?\n/);

  const map = new RopeMap(2);

  instructions.forEach((instruction) => {
    const instructionSplit = instruction.split(" ");

    const direction: Direction = instructionSplit[0] as Direction;
    const number = parseInt(instructionSplit[1]);

    for (let i = 0; i < number; i++) {
      map.moveHead(direction);
    }
  });

  return map.getTailPositionsCount();
};

export const part2 = (input: string) => {
  const instructions = input.split(/\r?\n/);

  const map = new RopeMap(10);

  instructions.forEach((instruction) => {
    const instructionSplit = instruction.split(" ");

    const direction: Direction = instructionSplit[0] as Direction;
    const number = parseInt(instructionSplit[1]);

    for (let i = 0; i < number; i++) {
      map.moveHead(direction);
    }
  });

  return map.getTailPositionsCount();
};
