/**
 * Name: Sum without highest and lowest number
 * Description: Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
 * 
 * 
 * { 6, 2, 1, 8, 10 } => 16
 * { 1, 1, 11, 2, 3 } => 6
 * 
 * Link: https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript
 */

function sumArray(array) {
  if(!array || array.length < 3) 
    return 0;
  
  array = array.sort((a, b) => a - b)
  array.shift()
  array.pop()
             
  return array.reduce((a, b) => a + b, 0);
}