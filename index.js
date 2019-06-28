//
// Write a simple substitution cipher that replaces one character from an alphabet
// with a character from an alternate alphabet, where each character's position in an
// alphabet is mapped to the alternate alphabet for encoding or decoding.

// If a character provided is not in the opposing alphabet, simply leave it as it is.
// example :
//
// const abc1 = "abcdefghijklmnopqrstuvwxyz";
// const abc2 = "kgnalpwtrbzvcujxofydeqsimh";
//
// const sub = new SubstitutionCipher(abc1, abc2);
//
// sub.encode("abc") // => "kgn"
// sub.decode("kgn") // => "abc"
//


function SubstitutionCipher(abc1, abc2) {
  this.encode = (str) => {
    if (typeof str !== 'string') return 'Argument should be a string!';
    let res = '';
    for (let i = 0; i < str.length; i++) {
      if (abc1.indexOf(str[i]) === -1) res += str[i];
      else {
        for (let j = 0; j < abc1.length; j++) {
          if (str[i] === abc1[j]) res += abc2[j];
        }
      }
    }
    return res;
  }
  this.decode = (str) => {
    if (typeof str !== 'string') return 'Argument should be a string!';
    let res = '';
    for (let i = 0; i < str.length; i++) {
      if (abc1.indexOf(str[i]) === -1) res += str[i];
      else {
        for (let j = 0; j < abc2.length; j++) {
          if (str[i] === abc2[j]) res += abc1[j];
        }
      }
   1}
    return res;
  }  
}

module.exports = SubstitutionCipher;