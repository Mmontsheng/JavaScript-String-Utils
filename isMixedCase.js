const isEmpty = require('./isEmpty');
/**
 * Checks if the string contains only lowercase characters
 */
module.exports = (str) => {
  if(!/^[a-zA-Z]+$/.test(str)) return false;

  if(str == null || isEmpty(str)) {
    return false;
  }
  let containsUppercase = false;
  let containsLowercase = false;
  for (let i = 0; i < str.length; i += 1) {
    if (containsUppercase && containsLowercase) {
      return true;
    }
    const char = str.charAt(i);
    if (char == char.toUpperCase()) {
      containsUppercase = true;
    }else if(char == char.toLowerCase()) {
      containsLowercase = true;
    }
  }
  return containsUppercase && containsLowercase;
};
