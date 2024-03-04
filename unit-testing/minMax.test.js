const minMax = require("./minMax");

test("min a>b", () => {
  expect(minMax.min(5, 3)).toBe(3);
});

test("min a<b", () => {
  expect(minMax.min(3, 6)).toBe(3);
});

test("min a=b", () => {
  expect(minMax.min(5, 5)).toBe(5);
});

test("max a>b", () => {
  expect(minMax.max(5, 3)).toBe(5);
});

test("max a<b", () => {
  expect(minMax.max(3, 6)).toBe(6);
});

test("max a=b", () => {
  expect(minMax.max(5, 5)).toBe(5);
});
