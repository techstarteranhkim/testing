const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  it("should return true for valid adult age", () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(25)).toBe(true);
  });

  it("should return false for invalid age", () => {
    expect(() => isAdult("not a number")).toThrow(TypeError);
    expect(() => isAdult(-5)).toThrow(TypeError);
  });
});
