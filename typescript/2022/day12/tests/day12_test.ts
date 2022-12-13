import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { checkValidTravel } from "../utils.ts";

Deno.test("checkValidTravel", () => {
  assertEquals(checkValidTravel("S", "a"), true, "S => a, true");
  assertEquals(checkValidTravel("S", "d"), false, "S => d, false");
  assertEquals(checkValidTravel("S", "E"), false, "S => E, false");
  assertEquals(checkValidTravel("b", "c"), true, "b => c, true");
  assertEquals(checkValidTravel("b", "a"), true, "b => a, true");
  assertEquals(checkValidTravel("b", "f"), false, "b => f, false");
  assertEquals(checkValidTravel("e", "c"), true, "e => c, true");
  assertEquals(checkValidTravel("a", "a"), true, "a => a, true");
  assertEquals(checkValidTravel("b", "q"), false, "b => q, false");
});
