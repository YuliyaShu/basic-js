const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = [];
  let arrForFilter = [];
  for (let name of names) {
    if (!arrForFilter.includes(name) && !result.includes(name)) {
      arrForFilter.push(name);
      result.push(name);
    } else {
      arrForFilter.push(name);
      function diff() {
        return (`${result.filter( (item) => item == name).length}` >= `${arrForFilter.filter( (item) => item == name).length}`) 
        ? `(${result.filter( (item) => item == name).length})`
        : `(${arrForFilter.filter( (item) => item == name).length - 1})`;
      }
      result.push(name + diff());
    }
  }
  return result;
}
 
module.exports = {
  renameFiles
};
