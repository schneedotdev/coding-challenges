/**
 * Name: Reverse every other word in the string
 * Description: Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
 * 
 * Link: https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
 */

function reverse(str){
  return str.split(' ').map((word, i) => {
    return i % 2 ? word.split('').reverse().join('') : word;
  }).join(' ').trim();
}