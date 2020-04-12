const alphabetize = require('../alphabetize');

test('reverse a string ', () => {
  const string = 'sorted';
  expect(alphabetize(string)).toEqual('deorst');
});

test('returns empty string for null strings', () => {
  const string = null;
  expect(alphabetize(string)).toBe('');
});