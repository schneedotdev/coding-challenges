/**
 * Name: Find the Divisors
 * Description: Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
 * Link: https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript
 */

function divisors(int) {
  let divisors = [];
  
  for (let i = 2; i <= int / 2; i++) {
    if(int % i === 0) divisors.push(i);
  }
  
  return divisors.length ? divisors : `${int} is prime`;
};