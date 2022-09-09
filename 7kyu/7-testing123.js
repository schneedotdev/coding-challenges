/**
 * Name: Testing 123
 * Description: Write a function which takes a list of strings and returns each line prepended by the correct number. The numbering starts at 1. The format is n: string. Notice the colon and space in between.
 * Link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
 */

var number = arr => arr.map((e, i) => `${i + 1}: ${e}`)