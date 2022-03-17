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

  count = 0;
  countMax = 0;
  
  calculateDepth(x) {

    if (this.count === 0) {
      this.countMax = 0;
    }

    this.count++;
    for (let unit of x) {
      if (Array.isArray(unit)) {
        this.calculateDepth(unit);
      }
    }
    this.countMax = Math.max(this.countMax, this.count);
    this.count--;
    return this.countMax;
  }
}

module.exports = {
  DepthCalculator
};
