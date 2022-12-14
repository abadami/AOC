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

export const lowerByOffset = (points: number[][][], offsetX: number) =>
  points.map((rockLine) =>
    rockLine.map((point) => [point[0] - offsetX, point[1]])
  );

export const findAllRockPoints = (points: number[][][]) => {
  const allRockPoints: number[][][] = [];
};

export const pointsBetweenTwo = (pointA: number[], pointB: number[]) => {
  const points = [];

  if (pointA[0] === pointB[0] && pointA[1] < pointB[1]) {
    for (let i = pointA[1]; i <= pointB[1]; i++) {
      points.push([pointA[0], i]);
    }
  } else if (pointA[0] === pointB[0] && pointA[1] > pointB[1]) {
    for (let i = pointA[1]; i >= pointB[1]; i--) {
      points.push([pointA[0], i]);
    }
  } else if (pointA[1] === pointB[1] && pointA[0] < pointB[0]) {
    for (let i = pointA[0]; i <= pointB[0]; i++) {
      points.push([i, pointA[0]]);
    }
  } else if (pointA[1] === pointB[1] && pointA[0] > pointB[0]) {
    for (let i = pointA[0]; i >= pointB[0]; i--) {
      points.push([i, pointA[0]]);
    }
  }

  return points;
};
