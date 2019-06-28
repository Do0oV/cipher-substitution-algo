# Algo Rithms Challenge // Cake Count

- [1. Getting started](#1-getting-started)
- [2. Challenge](#2-challenge)
  - [2.1. Examples](#21-examples)
  - [2.2. Testing your solution](#22-testing-your-solution)
  - [2.3. Submitting your solution](#23-submitting-your-solution)

## 1. Getting started
  `github.com/Do0oV/`

Fork this repo and then `git clone` your forked repo to your computer.
Once you're happy with your solution, `git push` and submit a pull request at
`github.com/Do0oV/`.

## 2. Challenge

Write a simple substitution cipher that replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

If a character provided is not in the opposing alphabet, simply leave it as be.


### 2.1. Examples

```js
---------------------------------------------------------------
var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
```

### 2.2. Testing your solution
To test your solution, run `npm i` in the root directory
and then run `npm t` to run the automated tests.

### 2.3. Submitting your solution

To submit your solution:

1. If you're working on a forked repo, push your changes to your forked repo and submit a pull request to this repo.
