const isBlank = require('../isBlank');

test('Returns false for non empty strings', () => {
  expect(isBlank('String')).toBe(false);
});

test('Returns true for empty strings', () => {
  expect(isBlank('')).toBe(true);
});

test('Returns true for nulls', () => {
  expect(isBlank(null)).toBe(true);
});
