import { lowestXAndY, parseInput } from "./utils.ts";

export const part1 = (input: string) => {
  const rockPoints = parseInput(input);

  const [lowX, lowY] = lowestXAndY(rockPoints);

  console.log(`Lowest X point: ${lowX}`);
  console.log(`Lowest Y point: ${lowY}`);

  return 0;
};

export const part2 = (input: string) => {
  return 0;
};
