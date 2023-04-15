/**
 * Name: Factorial
 * Description: Your task is to write function factorial.
 * Link: https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript
 */

function factorial(n){
  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  
  return result
}