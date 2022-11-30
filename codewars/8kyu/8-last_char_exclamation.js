/**
 * Name: Exclamation marks series #1: Remove an exclamation mark from the end of string
 * Description: Remove an exclamation mark from the end of a string. You can assume that the input data is always a string
 * 
 *  remove("Hi!") == "Hi"
 *  remove("Hi!!!") == "Hi!!"
 *  remove("!Hi") == "!Hi"
 *  remove("!Hi!") == "!Hi"
 *  remove("Hi! Hi!") == "Hi! Hi"
 *  remove("Hi") == "Hi"
 *
 * Link: https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
 */

const remove = s => s[s.length-1] === '!' ? s.slice(0, -1) : s