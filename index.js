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
      const index = abc1.indexOf(str[i]);
      if (index !== -1) res += abc2[index];
      else res += str[i];
    }
    return res;
  };
  this.decode = (str) => {
    if (typeof str !== 'string') return 'Argument should be a string!';
    let res = '';
    for (let i = 0; i < str.length; i++) {
      const index = abc2.indexOf(str[i]);
      if (index !== -1) res += abc1[index];
      else res += str[i];
    }
    return res;
  };
}

module.exports = SubstitutionCipher;
