const isAllUpperCase = require('../isAllUpperCase');

test('Returns true for string with lowercase characters', () => {
  expect(isAllUpperCase('ISUPPERCASE')).toBe(true);
});

test('Returns false for string with alphanumeric characters', () => {
  expect(isAllUpperCase('islowercase5')).toBe(false);
});

test('Returns false for string with special characters', () => {
  expect(isAllUpperCase('islowercase./')).toBe(false);
});

test('Returns false for string with both case characters', () => {
  expect(isAllUpperCase('islowercaseAndUPPERCASE')).toBe(false);
});

test('Returns false for null string', () => {
  expect(isAllUpperCase(null)).toBe(false);
});

test('Returns false for empty string', () => {
  expect(isAllUpperCase('')).toBe(false);
});