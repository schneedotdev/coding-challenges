/**
 * Name: String Array Duplicates
 * Description: In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array. Strings will be lowercase only, no spaces.
 * Link: https://www.codewars.com/kata/59f08f89a5e129c543000069/javascript
 */

function dup(strings) {
  return strings.map(removeConsecutive)
}

function removeConsecutive(string) {
  return [...string]
    .filter((char, i) => char !== string[i - 1])
    .join('')
}
