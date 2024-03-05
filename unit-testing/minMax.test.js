const minMax = require("./minMax");

describe("minimum", () => {
  test("Minimum zweiter Zahlen mit a>b", () => {
    //arrange
    const a = 5;
    const b = 3;
    const expected = b;
    //act
    result = minMax.min(a, b);
    //assert
    expect(result).toBe(expected);
  });

  test("Minimum zweiter Zahlen mit a<b", () => {
    //arrange
    const a = 3;
    const b = 6;
    const expected = a;
    //act
    result = minMax.min(a, b);
    //assert
    expect(result).toBe(expected);
  });

  test("Minimum zweiter Zahlen mit a=b", () => {
    //arrange
    const a = 5;
    const b = 5;
    const expected = a;
    //act
    result = minMax.min(a, b);
    //assert
    expect(result).toBe(expected);
  });
});

describe("maximum", () => {
  test("Maximum zweiter Zahlen mit a>b", () => {
    //arrange
    const a = 5;
    const b = 3;
    const expected = a;
    //act
    result = minMax.max(a, b);
    //assert
    expect(result).toBe(expected);
  });

  test("Maximum zweiter Zahlen mit a<b", () => {
    //arrange
    const a = 3;
    const b = 6;
    const expected = b;
    //act
    result = minMax.max(a, b);
    //assert
    expect(result).toBe(expected);
  });

  test("Maximum zweiter Zahlen mit a=b", () => {
    //arrange
    const a = 5;
    const b = 5;
    const expected = a;
    //act
    result = minMax.max(a, b);
    //assert
    expect(result).toBe(expected);
  });
});
