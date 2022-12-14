import { assertArrayIncludes } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { pointsBetweenTwo } from "../utils.ts";

Deno.test("Points Between Two", () => {
  const valueA = [2, 4];
  const valueB = [2, 8];

  const shouldHave = [
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
  ];

  const alue = pointsBetweenTwo(valueA, valueB);

  console.log(alue);

  assertArrayIncludes(alue, shouldHave, "Compare Arrays Recursive");
});
