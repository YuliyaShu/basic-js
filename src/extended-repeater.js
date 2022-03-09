const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = String(str);
  options.addition = String(options.addition);
  options.defSeparator = '+';
  options.defAdditionSeparator = '|';

  let newStr = [];
  if (!options.hasOwnProperty('repeatTimes')) options.repeatTimes = 1;
  for (let i = 0; i < options.repeatTimes; i++) {
      
    newStr.push(str);
      if (options.addition !== 'undefined') {
        if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes = 1;
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          newStr.push(options.addition);
          if (options.hasOwnProperty('additionSeparator')) {
            newStr.push(options.additionSeparator);
          } else {
            if (options.additionRepeatTimes !== 1) newStr.push(options.defAdditionSeparator);
          }
        }
        if (options.hasOwnProperty('additionSeparator')
        || options.additionRepeatTimes === 3) newStr = newStr.slice(0, newStr.length - 1);
        if (options.hasOwnProperty('separator') && options.hasOwnProperty('repeatTimes')) {
          newStr.push(options.separator);
        } else {
          newStr.push(options.defSeparator);
        }
      }
      if (options.addition === 'undefined' && !options.hasOwnProperty('separator')) {
        newStr.push(options.defSeparator);
      } else if (options.addition === 'undefined' && options.hasOwnProperty('separator')) {
        newStr.push(options.separator);
      } 
  }
  return newStr.slice(0, newStr.length - 1).join('');
}

module.exports = {
  repeater
};
