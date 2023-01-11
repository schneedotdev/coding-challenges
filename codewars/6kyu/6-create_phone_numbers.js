/**
 * Name: Create Phone Number
 * Description: Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 * Link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
 */

function createPhoneNumber(numbers){
  const str = numbers.join('')
  return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`
}