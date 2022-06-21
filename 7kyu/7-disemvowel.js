/**
 * Name: Disemvowel Trolls
 * Description: Your task is to write a function that takes a string and return a new string with all vowels removed.
 * 
 * Link: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
 */

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('')
            .filter(char => !vowels.includes(char.toLowerCase()))
            .join('');
}