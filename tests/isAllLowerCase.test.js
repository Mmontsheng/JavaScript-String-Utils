const isAllLowerCase = require('../isAllLowerCase');

test('Returns true for string with lowercase characters', () => {
  expect(isAllLowerCase('islowercase')).toBe(true);
});

test('Returns false for string with alphanumeric characters', () => {
  expect(isAllLowerCase('islowercase5')).toBe(false);
});

test('Returns false for string with special characters', () => {
  expect(isAllLowerCase('islowercase./')).toBe(false);
});

test('Returns false for string with both case characters', () => {
  expect(isAllLowerCase('islowercaseAndUPPERCASE')).toBe(false);
});

test('Returns false for null string', () => {
  expect(isAllLowerCase(null)).toBe(false);
});

test('Returns false for empty string', () => {
  expect(isAllLowerCase('')).toBe(false);
});