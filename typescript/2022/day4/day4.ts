export const getPairs = (scenario: string) => scenario.split(",");

export const getIds = (scenario: string[]) => {
  if (scenario.length !== 2) return [];

  return [scenario[0].split("-"), scenario[1].split("-")];
};

export const parseIds = (scenario: string[][]) => {
  if (scenario.length !== 2) return [];

  return [
    [parseInt(scenario[0][0]), parseInt(scenario[0][1])],
    [parseInt(scenario[1][0]), parseInt(scenario[1][1])],
  ];
};

export const isFullyContained = (scenario: number[][]): number => {
  if (scenario[1][0] >= scenario[0][0] && scenario[1][1] <= scenario[0][1]) {
    return 1;
  } else if (
    scenario[0][0] >= scenario[1][0] &&
    scenario[0][1] <= scenario[1][1]
  ) {
    return 1;
  }

  return 0;
};

export const countOverlappedSections = (scenario: number[][]): number => {
  const elfASections = [];

  for (let i = scenario[0][0]; i <= scenario[0][1]; i++) {
    elfASections.push(i);
  }

  for (let i = scenario[1][0]; i <= scenario[1][1]; i++) {
    if (elfASections.includes(i)) {
      return 1;
    }
  }

  return 0;
};

export const part1 = (input: string) => {
  const scenarios = input.split("\r\n");

  const total = scenarios
    .map(getPairs)
    .map(getIds)
    .map(parseIds)
    .map(isFullyContained)
    .reduce((prev, current) => prev + current, 0);

  return total;
};

export const part2 = (input: string) => {
  const scenarios = input.split("\r\n");

  const total = scenarios
    .map(getPairs)
    .map(getIds)
    .map(parseIds)
    .map(countOverlappedSections)
    .reduce((prev, current) => prev + current, 0);

  return total;
};
