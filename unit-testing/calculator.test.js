const calculator = require("./calculator");
describe("Unterrichtsbeispiele", () => {
  test("Die Summe von 2 + 5 ist 7", () => {
    //arrange+act
    const result = calculator.sum(2, 5);
    //assert
    expect(result).toEqual(7);
  });

  test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
    //arrange+act
    const result = calculator.sum("Apfel", 5);
    //assert
    expect(result).toEqual("Apfel5");
  });

  test("Der Quotient aus 10 durch 2 ist 5", () => {
    //arrange+act
    const result = calculator.divide(10, 2);
    //assert
    expect(result).toEqual(5);
  });

  test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
    //arrange+act
    const result = calculator.divide(10, 3);
    //assert
    expect(result).toBeCloseTo(3.33, 2);
  });

  test("Postive durch negative Zahl ist kleiner als 0", () => {
    //arrange+act
    const result = calculator.divide(10, -2);
    //assert
    expect(result).toBeLessThan(0);
  });

  test("Negativ durch negative Zahl ist größer als 0", () => {
    //arrange+act
    const result = calculator.divide(-10, -2);
    //assert
    expect(result).toBeGreaterThan(0);
  });
});
describe("Testen von Subtraktion ", () => {
  test("Subtraktion zweier positiver Zahlen", () => {
    //arrange
    const a = 10;
    const b = 20;
    const expected = -10;
    //act
    const result = calculator.subtract(a, b);
    //assert
    expect(result).toBe(expected);
  });

  test("Subtraktion zweier negativer Zahlen", () => {
    //arrange
    const a = -10;
    const b = -20;
    const expected = 10;
    //act
    const result = calculator.subtract(a, b);
    //assert
    expect(result).toBe(expected);
  });
  test("Subtraktion von 0 und einer negativen Zahl", () => {
    //arrange
    const a = 0;
    const b = -10;
    const expected = 10;
    //act
    const result = calculator.subtract(a, b);
    //assert
    expect(result).toBe(expected);
  });
});

describe("Testen von Multiplikation ", () => {
  test("Multiplikation zweier positiver Zahlen", () => {
    //arrange
    const a = 10;
    const b = 20;
    const expected = 200;
    //act
    const result = calculator.multiply(a, b);
    //assert
    expect(result).toBe(expected);
  });

  test("Multiplikation zweier negativer Zahlen", () => {
    //arrange
    const a = -10;
    const b = -20;
    const expected = 200;
    //act
    const result = calculator.multiply(a, b);
    //assert
    expect(result).toBe(expected);
  });
  test("Multiplikation mit einer 0", () => {
    //arrange
    const a = 10;
    const b = 0;
    const expected = 0;
    //act
    const result = calculator.multiply(a, b);
    //assert
    expect(result).toBe(expected);
  });
});
