/**
 * Name: The unknown but known variables: Addition
 * Description: There will be a string input in this format: 'a+b' 2 lower case letters (a-z) seperated by a '+'. Return the sum of the two variables. There is one correct answer for a pair of variables.
 * Link: https://www.codewars.com/kata/5716955a794d3013d00013f9/train/javascript
 */

const theVar = exp => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  return letters.indexOf(exp[0]) + letters.indexOf(exp[2]) + 2;
}