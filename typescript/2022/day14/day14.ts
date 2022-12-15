import { SandCave } from "./SandCave.ts";
import { lowerByOffset, lowestXAndY, parseInput } from "./utils.ts";

export const part1 = (input: string) => {
  const rockPoints = parseInput(input);

  const [offsetX, offsetY] = lowestXAndY(rockPoints);

  const offsetRockPoints = lowerByOffset(rockPoints, offsetX);

  const map = new SandCave(offsetRockPoints, offsetX);

  map.simulateSandUntilAbyss([500 - offsetX, 0]);

  return map.countRestingSand();
};

export const part2 = (input: string) => {
  const rockPoints = parseInput(input);

  const [offsetX, offsetY] = lowestXAndY(rockPoints);

  const offsetRockPoints = lowerByOffset(rockPoints, offsetX);

  const map = new SandCave(offsetRockPoints, offsetX);

  map.addFloor();

  map.printMap();

  map.simulateSandUntilAbyss([500 - offsetX, 0]);

  return map.countRestingSand();
};
