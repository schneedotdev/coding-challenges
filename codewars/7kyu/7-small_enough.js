/**
 * Name: Small enough?
 * Description: You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
 * Link: https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript
 */

function smallEnough(nums, limit){
  return nums.every(num => num <= limit)
}