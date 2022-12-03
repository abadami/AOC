export const setIntersection = (a: Set<string>, b: Set<string>) => {
  const newSet = new Set<string>();

  for (const entry of a) {
    if (b.has(entry)) {
      newSet.add(entry);
    }
  }

  return newSet;
};

export const intersectionOfThreeSets = (sets: Set<string>[]) => {
  const aToBIntersection = setIntersection(sets[0], sets[1]);

  return setIntersection(aToBIntersection, sets[2]);
};

export const convertStringToComponentCharSets = (string: string) => {
  const halfwayPoint = string.length / 2;

  const stringA = string.slice(0, halfwayPoint).split("");
  const stringB = string.slice(halfwayPoint, string.length).split("");

  const setA = new Set<string>(stringA);
  const setB = new Set<string>(stringB);

  return [setA, setB];
};

export const convertCharacterToValue = (characterSet: Set<string>) => {
  let value = 0;

  for (const character of characterSet) {
    if ("Z".charCodeAt(0) - character.charCodeAt(0) >= 0) {
      value = ("A".charCodeAt(0) - 1 - character.charCodeAt(0)) * -1 + 26;
    } else {
      value = ("a".charCodeAt(0) - 1 - character.charCodeAt(0)) * -1;
    }
  }

  return value;
};

export const part1 = (input: string) => {
  const scenarios = input.split("\r\n");

  const results = scenarios
    .map(convertStringToComponentCharSets)
    .map((sets) => setIntersection(sets[0], sets[1]))
    .map(convertCharacterToValue)
    .reduce((prev, val) => prev + val, 0);

  return results;
};

export const part2 = (input: string) => {
  const scenarios = input.split("\r\n");

  const groupedRunsacks = [];

  for (let i = 0; i < scenarios.length; i = i + 3) {
    const sets = [];

    sets.push(new Set<string>(scenarios[i]));
    sets.push(new Set<string>(scenarios[i + 1]));
    sets.push(new Set<string>(scenarios[i + 2]));

    groupedRunsacks.push(sets);
  }

  const results = groupedRunsacks
    .map(intersectionOfThreeSets)
    .map(convertCharacterToValue)
    .reduce((prev, val) => prev + val, 0);

  return results;
};
