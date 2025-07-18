/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let buffer;
  numbers.forEach((element) => {
    if (!buffer) {
      buffer = element;
    } else if (element > buffer) {
      buffer = element;
    }
  });
  return buffer;
}

module.exports = findLargestElement;

