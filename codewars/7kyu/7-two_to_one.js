/**
 * Name: Two to One
 * Description: Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
 * Link: https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript
 */

function longest(s1, s2) {
  return [...new Set([...s1, ...s2])].sort().join('')
}