type Direction = "D" | "U" | "L" | "R";
//2,4 4,3
class RopeMap {
  //map: string[][];
  ropeLength: number;
  head = [0, 0];
  tail = [0, 0];
  tailPositions = new Set<string>();
  moves: number[][] = [[0, 0]];

  constructor(ropeLength: number) {
    //this.map = [["s"]];
    this.ropeLength = ropeLength;
    this.tailPositions.add("00");
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

    const distance = Math.max(
      Math.abs(this.head[0] - this.tail[0]),
      Math.abs(this.head[1] - this.tail[1])
    );

    if (distance > this.ropeLength) {
      this.moveTail();
    }
  }

  moveTail() {
    if (this.head[0] === this.tail[0]) {
      this.tail[1] =
        this.head[1] > this.tail[1] ? this.tail[1] + 1 : this.tail[1] - 1;
    } else if (this.head[1] === this.tail[1]) {
      this.tail[0] =
        this.head[0] > this.tail[0] ? this.tail[0] + 1 : this.tail[0] - 1;
    } else {
      this.tail[0] =
        this.head[0] > this.tail[0] ? this.tail[0] + 1 : this.tail[0] - 1;
      this.tail[1] =
        this.head[1] > this.tail[1] ? this.tail[1] + 1 : this.tail[1] - 1;
    }

    this.tailPositions.add(`${this.tail[0]}${this.tail[1]}`);
  }

  getTailPositionsCount() {
    return this.tailPositions.size;
  }
}

export const part1 = (input: string) => {
  const instructions = input.split("\r\n");

  const map = new RopeMap(10);

  instructions.forEach((instruction, index) => {
    const instructionSplit = instruction.split(" ");

    const direction: Direction = instructionSplit[0] as Direction;
    const number = parseInt(instructionSplit[1]);

    for (let i = 0; i < number; i++) {
      map.moveHead(direction);
    }
  });

  console.log(map.tailPositions);
  console.log(map.moves.length);

  return map.getTailPositionsCount();
};

export const part2 = (input: string) => {};
