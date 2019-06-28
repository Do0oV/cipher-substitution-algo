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
    if (typeof str !== 'string') {
      return 'Argument should be a string!';
    }
    else {
      return str.split('').map((el, i) => {
        return (/\w/i).test(el) ? abc2[abc1.indexOf(el)] : el; 
      }).join('');
    }


  }
  this.decode = (str) => {
    if (typeof str !== 'string') {
      return 'Argument should be a string!';
    }
    else {
      return str.split('').map((el, i) => {
        return (/\w/i).test(el) ? abc1[abc2.indexOf(el)] : el; 
      }).join('');
    }
  }
}

module.exports = SubstitutionCipher;