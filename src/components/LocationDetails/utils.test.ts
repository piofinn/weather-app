import { describe, it, expect } from "vitest";
import { getLocalTime } from "./utils";

describe("getLocalTime", () => {
  it("takes a string as the first argument", () => {
    const testDate = "2023-03-06T16:00:00";
    expect(getLocalTime(testDate, "no-NB")).toBe("16:00");
  });

  it("takes a number as the first argument", () => {
    const testDate = 1678114800 * 1000; // 2023-03-06T16:00:00
    expect(getLocalTime(testDate, "no-NB")).toBe("16:00");
  });

  it("returns the correct time", () => {
    const testDate = new Date("2023-03-06T16:00:00");
    expect(getLocalTime(testDate, "no-NB")).toBe("16:00");
  });
});
