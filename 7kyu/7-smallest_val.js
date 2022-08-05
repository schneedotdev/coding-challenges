/**
 * Name: Smallest value of an array
 * Description: Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
 * Link: https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
 */

const min = (arr, toReturn) => toReturn === 'value' ? arr.sort((a, b) => a - b)[0] : 0