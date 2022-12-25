/**
 * Name: Simple Fun #176: Reverse Letter
 * Description: Given a string str, reverse it and omit all non-alphabetic characters.
 * Link: https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
 */

function reverseLetter(str) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const sanitized = [...str].filter(char => letters.indexOf(char) >= 0)
  return sanitized.reverse().join('')
}