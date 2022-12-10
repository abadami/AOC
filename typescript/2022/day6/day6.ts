const findDistinctCharactersIndex = (characters: string[], number: number) => {
  for (let i = 0; i <= characters.length - number; i++) {
    const characterSet = new Set();

    for (let j = 1; j <= number; j++) {
      characterSet.add(characters[i + j]);
    }

    if (characterSet.size === number) {
      return i + number + 1;
    }
  }
};

export const part1 = (input: string) => {
  const characters = input.split("");

  return findDistinctCharactersIndex(characters, 4);
};

export const part2 = (input: string) => {
  const characters = input.split("");

  return findDistinctCharactersIndex(characters, 14);
};
