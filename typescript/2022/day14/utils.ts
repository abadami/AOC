export const parseInput = (input: string) =>
  input.split(/\r?\n/).map((line) => parseLine(line));

export const parseLine = (line: string) =>
  line
    .split(" -> ")
    .map((pair) => pair.split(",").map((number) => parseInt(number)));

export const lowestXAndY = (points: number[][][]) =>
  points.reduce(
    (previous, current) => {
      const [x, y] = current.reduce(
        (past, now) => {
          const newX = now[0] < past[0] ? now[0] : past[0];
          const newY = now[1] < past[1] ? now[1] : past[1];

          return [newX, newY];
        },
        [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
      );

      const newX = x < previous[0] ? x : previous[0];
      const newY = y < previous[1] ? y : previous[1];

      return [newX, newY];
    },
    [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
  );
