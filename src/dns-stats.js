const { NotImplementedError } = require('../extensions/index.js');

/**domains[0]
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

// function count(x) {
  
  let key1;
  let key2;
  let key3;
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let obj = {};
  
  for (let unit of domains) {
    unit = '.' + unit;
    key1 = '.' + unit.split('.').reverse()[0];
    let key1ForValue = unit.split('.').reverse()[0];
    if (unit.includes(key1ForValue)) counter1++;
    obj[key1] = counter1;
  }
  
  for (let unit of domains) {
    key2 = '.' + unit.split('.').reverse()[0] + '.' + unit.split('.').reverse()[1];
    let key2ForValue = unit.split('.').reverse()[1] + '.' + unit.split('.').reverse()[0];
    if (unit.includes(key2ForValue))  counter2++;
    obj[key2] = counter2;
  }

  for (let unit of domains) {
    key3 = '.' + unit.split('.').reverse()[0] + '.' + unit.split('.').reverse()[1] + '.' + unit.split('.').reverse()[2];
    let key3ForValue = unit.split('.').reverse()[2] + '.' + unit.split('.').reverse()[1] + '.' + unit.split('.').reverse()[0];
    if (unit.includes(key3ForValue)) counter3++;
    obj[key3] = counter3;
  }

  for (let key in obj) {
    if (obj[key] === 0) delete obj[key];
  }
  return obj;
  
}

// }

module.exports = {
  getDNSStats
};
