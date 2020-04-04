
const isBlank = require('./isBlank.js');
/**
 * Checks if a strng is not empty, null or whitespace only.
 */
module.exports = str => {
  return !isBlank(str);
};
