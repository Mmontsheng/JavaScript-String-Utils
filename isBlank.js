
/**
 * Checks if a string is empty, null or whitespace only.
 */
module.exports = str => {
  if(str == null || str.length === 0 ) {
    return true;
  }
  for(let i = 0; i < str.length; i += 1 ) {
    // if white space at this character
    if(/\s/.test(str.charAt(i))) {
      return false;
    }
  }
  return true;
};
