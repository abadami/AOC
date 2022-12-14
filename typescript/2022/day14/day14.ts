import { SandCave } from "./SandCave.ts";
import { lowerByOffset, lowestXAndY, parseInput } from "./utils.ts";

export const part1 = (input: string) => {
  const rockPoints = parseInput(input);

  const [offsetX, offsetY] = lowestXAndY(rockPoints);

  const offsetRockPoints = lowerByOffset(rockPoints, offsetX);

  const map = new SandCave(offsetRockPoints, offsetX);

  map.printMap();

  return 0;
};

export const part2 = (input: string) => {
  return 0;
};
