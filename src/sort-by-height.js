const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrCopied = arr.slice();
  let index;
  arrCopied.sort((a,b) => a - b);
  for (let unit of arrCopied) {
    if (unit !== -1) {
      index = arrCopied.indexOf(unit);
      break;
    }
  }
  let arrCopied2 = arrCopied.sort((a,b) => a - b).slice(index, arrCopied.length);
  let result = [];
  for (let unit of arr) {
      if (unit === -1){
        result.push(-1);
      } else {
        const forPush = arrCopied2.slice(0,1).join();
        result.push(Number(forPush));
        // console.log('unit ' + unit)
        arrCopied2.shift();
      } 
  }
  return result;
}
module.exports = {
  sortByHeight
};
