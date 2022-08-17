/**
 * Name: Is n divisible by x and y?
 * Description: Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
 * Link: https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
 */

const isDivisible = (n, x, y) => !(n % x) && !(n % y)