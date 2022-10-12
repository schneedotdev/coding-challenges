/**
 * Name: Count by X
 * Description: Create a function with two arguments that will return an array of the first (n) multiples of (x).
 * 
 * Assume both the given number and the number of times to count will be positive numbers greater than 0. 
 * 
 * Return: an array
 * 
 * Link: https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
 */

function countBy(x, n) {
  let z = [x];

  for(let i = 1; i < n; i++)
    z.push(z[i - 1] + x);
  
  return z;
}