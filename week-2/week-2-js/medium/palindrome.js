/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const reg = /[^a-zA-Z0-9]/g;
  let filteredStr = str.toLowerCase().replace(reg, "").split("");
  // let filteredStr = [];
  let start = 0;
  let end = filteredStr.length - 1;
  while (end > start) {
    if (filteredStr[start] === filteredStr[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
