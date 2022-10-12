/**
 * Name: Pyramid Array
 * Description: Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
 */

function pyramid(n) {
  let arr = [];
  
  for(let i = 1; i < n + 1; i++)
    arr.push(new Array(i).fill(1));
  
  return arr;
}