const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(a) {
    this.a = a;
  }
  
  function(b) {
    return (this.a === false) ? b.split('').reverse().join('') : b;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error('Incorrect arguments!');
    let result = '';
    let x;
    let j = 0;
    let charCode;
    let charCodeKey;
    
      for (let i = 0; i < message.length; i++) {
          charCode = message.toUpperCase()[i].charCodeAt(0) - 65;
          charCodeKey = key.toUpperCase()[j % key.length].charCodeAt(0) - 65;
          if (charCode >= 0 && charCode <= 25) {
            x = (charCode + charCodeKey) % 26;
            result += String.fromCharCode(x + 65);
            j++;
          } else {
            result += message[i];
          }
      }
      return this.function(result);
    
    
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw Error('Incorrect arguments!');
    let result = '';
    let x;
    let j = 0;
    let charCode;
    let charCodeKey;
    
      for (let i = 0; i < message.length; i++) {
          charCode = message.toUpperCase()[i].charCodeAt(0) - 65;
          charCodeKey = key.toUpperCase()[j % key.length].charCodeAt(0) - 65;
          if (charCode >= 0 && charCode <= 25) {
            x = (charCode - charCodeKey + 26) % 26;
            result += String.fromCharCode(x + 65);
            j++;
          } else {
            result += message[i];
          }
      }
      return this.function(result);
  }
}

module.exports = {
  VigenereCipheringMachine
};
