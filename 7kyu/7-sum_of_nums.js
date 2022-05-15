/**
 * Name: Beginner Series #3 Sum of Numbers
 * Description: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
 * 
 * Note: a and b are not ordered!
 */

function getSum(a,b) {
  let range = [a, b].sort((a, b) => a - b);
  let sum = 0;
  
  for(let i = range[0]; i <= range[1]; i++) {
    sum += i;
  }
  
  return sum;
}