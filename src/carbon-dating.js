const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof Number(sampleActivity) === 'number' 
      && typeof sampleActivity  === 'string'
      && sampleActivity > 0
      && sampleActivity < 15) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) * HALF_LIFE_PERIOD / 0.693);
  } else {
    return false;
  }
  
// return Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / (1 /(0.693 / HALF_LIFE_PERIOD));

}

module.exports = {
  dateSample
};
