/**
 * Name: Largest pair sum in array
 * Description: Given a sequence of numbers, find the largest pair sum in the sequence.
 * Link: https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
 */

function largestPairSum (nums) {
  const sorted = nums.sort((a, b) => a - b)
  return sorted[sorted.length - 2] + sorted[sorted.length - 1]
}