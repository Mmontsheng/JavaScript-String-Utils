const reverse = require('../reverse');

test('reverse a string ', () => {
  const string = 'reversed';
  expect(reverse(string)).toEqual('desrever');
});

test('returns empty string for null strings', () => {
  const string = null;
  expect(reverse(string)).toBe('');
});