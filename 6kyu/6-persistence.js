/**
 * Name: Persistent Bugger
 * Description: Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
 * Link: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 */

function persistence(num) {
  let count = 0
  
  while ((num + '').length > 1) {
    num = (num + '').split('').reduce((a, c) => a * Number(c), 1)
    count++
  }
  
  return count
}