/**
 * Name: Find Remainder
 * Description: Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
 * 
 * Link: https://www.codewars.com/kata/524f5125ad9c12894e00003f/train/javascript
 */

function remainder(n, m){
  return Math.max(n, m) % Math.min(n, m);
}