/**
 * Name: Double Char
 * Description: repeat every character in the string, repeating characters should be repeated
 * Link: https://www.codewars.com/kata/56b1f01c247c01db92000076/train/javascript
 */

function doubleChar(str) {
  return str.split('').map(char => char.repeat(2)).join('');
}