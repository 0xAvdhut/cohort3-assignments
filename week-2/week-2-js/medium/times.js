/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
const curr = new Date().getTime();

function calculateTime(n) {
  sum = (n * (n - 1)) / 2;
  const diff = new Date().getTime() - curr;
  return diff;
}

const res = calculateTime(10000000000000);
console.log(res);

