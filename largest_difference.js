/* Given an array of numbers, pick any two numbers a and b, we could get the difference by Math.abs(a - b).

Can you write a function to get the largest difference?


largestDiff([-1, 2,3,10, 9])
// 11,  obviously Math.abs(-1 - 10) is the largest

largestDiff([])
// 0

largestDiff([1])
// 0
 */


/**
 * @param {number[]} arr
 * @return {number}
 */
function largestDiff(arr) {
  if (arr.length == 0) {
    return 0;
  }
  const sorted = arr.sort((a, b) => {
    return a - b;
  });
  return sorted[sorted.length - 1] - sorted[0];
}