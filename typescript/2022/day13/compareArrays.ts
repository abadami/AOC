import { RecursiveArray } from "./types.ts";

export const compareArraysRecursion = (
  valueA: RecursiveArray,
  valueB: RecursiveArray
): number | null => {
  if ([valueA, valueB].every(Number.isInteger)) {
    if (valueA > valueB) {
      return 1;
    } else if (valueB > valueA) {
      return -1;
    } else {
      return null;
    }
  }

  if (Array.isArray(valueA) && Array.isArray(valueB)) {
    for (let i = 0; i < Math.min(valueA.length, valueB.length); i++) {
      const elementA = valueA[i];
      const elementB = valueB[i];
      const res = compareArraysRecursion(elementA, elementB);
      if (res !== null) return res;
    }

    return compareArraysRecursion(valueA.length, valueB.length);
  }

  return compareArraysRecursion([valueA].flat(), [valueB].flat());
};
