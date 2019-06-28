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


class SubstitutionCipher {
  constructor (abc1, abc2) {
    this.first = abc1.split('');
    this.second = abc2.split('');
    this.dict1 = abc1.split('').reduce((acc, letter, id) => {
      acc[letter] = this.second[id]
      return acc;
    }, {})
    this.dict2 = abc2.split('').reduce((acc, letter, id) => {
      acc[letter] = this.first[id]
      return acc;
    }, {})
  }


encode(str) {
    if (typeof str !== 'string') return 'Argument should be a string!'
    return str.split('').map(l => this.dict1[l] || l).join('')
  }

 decode (str) {
    if (typeof str !== 'string') return 'Argument should be a string!'
    return str.split('').map(l => this.dict2[l] || l).join('')
  }
}

module.exports = SubstitutionCipher;