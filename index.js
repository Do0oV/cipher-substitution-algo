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
    return code(abc1, abc2, str);
  };
  this.decode = (str) => {
    return code(abc2, abc1, str);
  };

  function code (first, second, str) {
    // O(n)
    if (typeof str !== 'string') return 'Argument should be a string!';
    const obj = {};
    for (let i = 0; i < first.length; i++) {
      obj[first[i]] = second[i];
    }
    let res = '';
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      res += (obj[letter] || letter);
    }
    return res;

    // O(n^2)
    // if (typeof str !== 'string') return 'Argument should be a string!';
    // let res = '';
    // for (let i = 0; i < str.length; i++) {
    //   const index = first.indexOf(str[i]);
    //   if (index !== -1) res += second[index];
    //   else res += str[i];
    // }
    // return res;
  }
}


module.exports = SubstitutionCipher;
