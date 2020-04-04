
const isEmpty = require('./isEmpty.js');
/**
 * Checks if a strng is empty, null or whitespace only.
 */
module.exports = str => {
  isEmpty(str);
  for(let i = 0; i < str.length; i += 1 ) {
    // if white space at this character
    if(/\s/.test(str.charAt(i))) {
      return false;
    }
  }
  return true;
};
