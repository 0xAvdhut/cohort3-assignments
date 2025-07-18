/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let arr = str1.toLowerCase().split("").sort().join("");
  let arr2 = str2.toLowerCase().split("").sort().join("");
  let bool1 = arr === arr2 ? true : false;
  return bool1;
}
module.exports = isAnagram;
module.exports = isAnagram;
