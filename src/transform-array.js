const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  
  let arrCopied = arr.slice();
  if (arrCopied.length === 0) return arrCopied;

  for (let i = 0; i < arrCopied.length; i++) {
   
    obj = {
      discardNext() {if (arrCopied[i + 1] !== undefined) arrCopied.splice(i + 1, 1)},
      discardPrev() {if (arrCopied[i - 1] !== undefined) arrCopied.splice(i - 1, 1)},
      doubleNext() {if (arrCopied[i + 1] !== undefined) arrCopied.splice(i + 1, 0, arrCopied[i + 1])},
      doublePrev() {if (arrCopied[i - 1] !== undefined) arrCopied.splice(i, 0, arrCopied[i - 1])},
    };

    if (arrCopied[i] === '--discard-next') obj.discardNext();
    if (arrCopied[i] === '--discard-prev') obj.discardPrev();
    if (arrCopied[i] === '--double-next') obj.doubleNext();
    if (arrCopied[i] === '--double-prev') {
      obj.doublePrev();
      i++;
     }   
    }
  return arrCopied.filter((a) => a !== '--discard-next' 
                        && a !== '--discard-prev' 
                        && a !== '--double-next' 
                        && a !== '--double-prev' );
}

module.exports = {
  transform
};
