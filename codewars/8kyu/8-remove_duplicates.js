/**
 * Name: Remove Duplicates from a List
 * Description: Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.
 * Link: https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
 */

const distinct = (a) => [...new Set(a)];
