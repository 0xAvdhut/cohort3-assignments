/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let arr = str.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let buffer = 0;
  arr.forEach((element) => {
    if (vowels.includes(element)) {
      buffer += 1;
    }
  });
  return buffer;
}

module.exports = countVowels;

