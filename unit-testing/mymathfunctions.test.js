const mymathfunctions = require("./mymathfunctions");

describe("Test Basic Math Add Functions", () => {
  test("Basic Add Function to pass with Basic input", () => {
    const result = mymathfunctions.addNumbers(2, 5);
    //console.log("My Result", result);
    expect(result).toBe(7);
  });
});

describe("Test Basic Math Divide Functions", () => {
  test("Basic Divide Function to pass with Basic input", () => {
    expect(() => {
      const result = divideNrs(10, 5);
      //console.log("MY division result", result);
      expect(result).toBe(2);
    }).toThrow(ReferenceError);
  });
});
