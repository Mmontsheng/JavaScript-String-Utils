const isEmpty = require('../isEmpty');

test('Returns false for non empty strings', () => {
  expect(isEmpty('String')).toBe(false);
});

test('Returns true for empty strings', () => {
  expect(isEmpty('')).toBe(true);
});

test('Returns true for nulls', () => {
  expect(isEmpty(null)).toBe(true);
});
