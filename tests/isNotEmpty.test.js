const isNotEmpty = require('../isNotEmpty');

test('Returns true for non empty strings', () => {
  expect(isNotEmpty('String')).toBe(true);
});

test('Returns false for empty strings', () => {
  expect(isNotEmpty('')).toBe(false);
});

test('Returns false for nulls', () => {
  expect(isNotEmpty(null)).toBe(false);
});
