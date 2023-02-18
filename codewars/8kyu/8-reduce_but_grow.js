/**
 * Name: Reduce but grow
 * Description: Given a non-empty array of integers, return the result of multiplying the values together in order.
 * Link: https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript
 */

function grow(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}