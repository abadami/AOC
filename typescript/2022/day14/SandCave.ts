export class SandCave {
  map: string[][];
  offSetX: number;

  constructor(rockPoints: number[][][], offsetX: number) {
    this.map = this.createMapWithRocks(rockPoints);
    this.offSetX = offsetX;
  }

  createMapWithRocks(rockPoints: number[][][]) {
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

    for (let i = 0; i <= highestX; i++) {
      const line: string[] = [];
      for (let j = 0; j <= highestY; j++) {
        line.push(".");
      }
      newMap.push(line);
    }

    return newMap;
  }

  printMap() {
    this.map.forEach((line) => console.log(line.join("")));
  }
}
