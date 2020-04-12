const isMixedCase = require('../isMixedCase');

test('Returns true for string with both case characters', () => {
  expect(isMixedCase('islowercaseAndUPPERCASE')).toBe(true);
});

test('Returns fasle for string with lowercase characters only', () => {
  expect(isMixedCase('islowercase')).toBe(false);
});

test('Returns fasle for string with uppercase characters only', () => {
  expect(isMixedCase('ISUPPERCASE')).toBe(false);
});