/**
 * Name: Sum Mixed Array
 * Description: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number
 * Link: https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript
 */

function sumMix(x){
 return x.reduce((a, b) => a + Number(b), 0)
}