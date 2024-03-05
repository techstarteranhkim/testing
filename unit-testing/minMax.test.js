const minMax = require("./minMax");

test("Minimum zweiter Zahlen mit a>b", () => {
  expect(minMax.min(5, 3)).toBe(3);
});

test("Minimum zweiter Zahlen mit a<b", () => {
  expect(minMax.min(3, 6)).toBe(3);
});

test("Minimum zweiter Zahlen mit a=b", () => {
  expect(minMax.min(5, 5)).toBe(5);
});

test("Maximum zweiter Zahlen mit a>b", () => {
  expect(minMax.max(5, 3)).toBe(5);
});

test("Maximum zweiter Zahlen mit a<b", () => {
  expect(minMax.max(3, 6)).toBe(6);
});

test("Maximum zweiter Zahlen mit a=b", () => {
  expect(minMax.max(5, 5)).toBe(5);
});
