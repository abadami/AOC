export const part1 = (input: string) => {
  let highest = 0;

  const splitValues = input.split("\n");

  let trackTotal = 0;

  for (let i = 0; i < splitValues.length; i++) {
    const currentValue = splitValues[i];

    if (currentValue === "") {
      if (trackTotal > highest) {
        highest = trackTotal;
      }

      trackTotal = 0;

      continue;
    }

    trackTotal += parseInt(currentValue);
  }

  return highest;
};

export const part2 = (input: string) => {
  const totals = [];

  const splitValues = input.split("\n");

  let trackTotal = 0;

  for (let i = 0; i < splitValues.length; i++) {
    const currentValue = splitValues[i];

    if (currentValue === "") {
      totals.push(trackTotal);

      trackTotal = 0;

      continue;
    }

    trackTotal += parseInt(currentValue);
  }

  const sortedTotals = totals
    .sort((a: number, b: number) => {
      if (a > b) {
        return -1;
      } else if (b > a) {
        return 1;
      } else {
        return 0;
      }
    })
    .slice(0, 3);

  return sortedTotals[0] + sortedTotals[1] + sortedTotals[2];
};
