module.exports = (str) => {
  if(str == null || str.length === 0 ) {
    return '';
  }
  return str.split('').sort().join('');
};