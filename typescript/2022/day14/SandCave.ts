import { Point } from "./type.ts";
import { findAllRockPoints } from "./utils.ts";

export class SandCave {
  map: string[][];
  rockPoints: Point[][];
  offSetX: number;

  constructor(rockPoints: Point[][], offsetX: number) {
    this.map = this.createMap(rockPoints);
    this.rockPoints = rockPoints;
    this.addRocks();
    this.offSetX = offsetX;
  }

  createMap(rockPoints: Point[][]) {
    let highestX = 0;
    let highestY = 0;

    const newMap: string[][] = [];

    for (let i = 0; i < rockPoints.length; i++) {
      const line = rockPoints[i];
      for (let j = 0; j < line.length; j++) {
        highestX = line[j][0] > highestX ? line[j][0] : highestX;
        highestY = line[j][1] > highestY ? line[j][1] : highestY;
      }
    }

    for (let i = 0; i <= highestY; i++) {
      const line: string[] = [];
      for (let j = 0; j <= highestX; j++) {
        line.push(".");
      }
      newMap.push(line);
    }

    return newMap;
  }

  addRocks() {
    const allRockPoints = findAllRockPoints(this.rockPoints);
    allRockPoints.forEach((point) => {
      this.map[point[1]][point[0]] = "#";
    });
  }

  simulateSandUntilAbyss(startingPoint: Point) {
    let sandProducing = true;
    const currentPoint: Point = [...startingPoint];

    while (sandProducing) {
      if (this.map.length < currentPoint[1] || currentPoint[0] < 0) {
        sandProducing = false;
      } else if (this.canFallBelow(currentPoint)) {
        currentPoint[1] = currentPoint[1] + 1;
      } else if (this.canFallDownLeft(currentPoint)) {
        currentPoint[0] = currentPoint[0] - 1;
        currentPoint[1] = currentPoint[1] + 1;
      } else if (this.canFallDownRight(currentPoint)) {
        currentPoint[0] = currentPoint[0] + 1;
        currentPoint[1] = currentPoint[1] + 1;
      } else {
        this.map[currentPoint[1]][currentPoint[0]] = "o";
        currentPoint[0] = startingPoint[0];
        currentPoint[1] = startingPoint[1];
      }
    }
  }

  canFallBelow(currentPoint: Point) {
    if (this.map.length < currentPoint[1] + 1 || currentPoint[0] < 0)
      return false;

    const futurePoint = this.map[currentPoint[1] + 1][currentPoint[0]];

    return futurePoint !== "#" && futurePoint !== "o";
  }

  canFallDownLeft(currentPoint: Point) {
    if (this.map.length < currentPoint[1] + 1) return false;

    const futurePoint = this.map[currentPoint[1] + 1][currentPoint[0] - 1];

    return futurePoint !== "#" && futurePoint !== "o";
  }

  canFallDownRight(currentPoint: Point) {
    if (this.map.length < currentPoint[1] + 1) return false;

    const futurePoint = this.map[currentPoint[1] + 1][currentPoint[0] + 1];

    return futurePoint !== "#" && futurePoint !== "o";
  }

  countRestingSand() {
    return this.map.reduce(
      (previous, line) =>
        previous +
        line.reduce(
          (previousValue, current) => previousValue + (current === "o" ? 1 : 0),
          0
        ),
      0
    );
  }

  addFloor() {
    const emptyFloor = [];
    const rockFloor = [];

    for (let i = 0; i < this.map[0].length; i++) {
      emptyFloor.push(".");
      rockFloor.push("#");
    }

    this.map.push(emptyFloor);
    this.map.push(rockFloor);
  }

  printMap() {
    this.map.forEach((line) => console.log(line.join("")));
  }
}
