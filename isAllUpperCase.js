const isEmpty = require('./isEmpty');
/**
 * Checks if the string contains only lowercase characters
 */
module.exports = (str) => {
  if(!/^[a-zA-Z]+$/.test(str)) return false;

  if(str == null || isEmpty(str)) {
    return false;
  }
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    if (char !== char.toUpperCase()) {
      return false;
    }
  }
  return true;
};
