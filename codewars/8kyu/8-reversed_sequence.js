/**
 * Name: Reversed sequence 
 * Description: Build a function that returns an array of integers from n to 1 where n>0
 * Link: https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
 */
const reverseSeq = n => {
    return [...Array(n).keys()].sort((a, b) => b - a).map(n => n + 1)
}