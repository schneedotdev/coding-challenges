/**
 * Name: Sort array by string length
 * Description: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
 * Link: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript
 */

const sortByLength = arr => arr.sort((a, b) => a.length - b.length)