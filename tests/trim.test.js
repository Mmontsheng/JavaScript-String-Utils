const trim = require('../trim');

test('returns a trimmed string strings', () => {
  const string = 'test string  ';
  expect(trim(string)).toEqual('test string');
});


test('returns null null strings', () => {
  const string = null;
  expect(trim(string)).toBe(null);
});