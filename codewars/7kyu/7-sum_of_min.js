/**
 * Name: Sum of Minimums!
 * Description: Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
 * Link: https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript
 */

function sumOfMinimums(arr) {
  return arr.reduce((sum, cur) => sum + cur.sort((a, b) => a - b)[0], 0)
}