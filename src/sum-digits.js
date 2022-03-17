const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result; 
  function summer(x) {
    result = String(x).split('').reduce((sum, a) => sum + Number(a), 0);
    if (String(result).length > 1) {
      summer(result);
    } else {
      return result;
    }
  }
  summer(n);
  return result;
}

module.exports = {
  getSumOfDigits
};
