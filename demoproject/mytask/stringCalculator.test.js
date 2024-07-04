const add = require('./stringCalculator');

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself when only one number is provided', () => {
  expect(add("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('should handle multiple numbers', () => {
  expect(add("1,2,3")).toBe(6);
});

test('should handle new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should handle different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw an exception for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('should throw an exception for multiple negative numbers', () => {
  expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed: -2, -3");
});
