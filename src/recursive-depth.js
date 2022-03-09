const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let count = 1;
    let countMax = 1;
    if (arr.length === 0) {
      return 1;
    }
    function recur(x) {
      for (let unit of x) {
        
        if (Array.isArray(unit)) {
          count++;
          recur(unit);
        }
        countMax = Math.max(countMax, count);
        count = 1;
        /*
        console.log('UNIT ' + unit)
        if (unit.length === 0) {
          count++;
        }
        
        if (Array.isArray(unit) === true) {
          count++;
          recur(unit);
        }
        console.log('after recur   ' + count)
        if (count > countMax) {
          countMax = count;
          count = 1;
          console.log('countMax ' + countMax)
        }
       
        */
      }
    }
    recur(arr);
      
    console.log(countMax)
      return countMax;
    }
  }
  const depthCalc = new DepthCalculator();
  depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]);
  
  


module.exports = {
  DepthCalculator
};
