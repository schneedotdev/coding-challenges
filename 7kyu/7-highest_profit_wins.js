/**
 * Name: The highest profit wins!
 * Description: Write a function that returns both the minimum and maximum number of the given list/array. 
 * Link: https://www.codewars.com/kata/559590633066759614000063/train/javascript
 */

function minMax(arr){
  arr = arr.sort((a, b) => a - b);
  return [arr[0], arr[arr.length-1]];
}