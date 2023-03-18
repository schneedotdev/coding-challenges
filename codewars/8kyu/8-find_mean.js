/**
 * Name: Find the mean
 * Description: Find the mean (average) of a list of numbers in an array.
 * Link: https://www.codewars.com/kata/55d277882e139d0b6000005d/train/javascript
 */

const findAverage = nums => {
  return nums.reduce((sum, num) => sum + num, 0) / nums.length
}