const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result: Array(),
  
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {
    if (this.result[position - 1] === undefined) {
      this.result = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.result.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.result.reverse();
    return chainMaker;
  },
  finishChain() {
    const finish = this.result.join('~~');
    this.result = Array();
    return finish;
  }
  
};

module.exports = {
  chainMaker
};
