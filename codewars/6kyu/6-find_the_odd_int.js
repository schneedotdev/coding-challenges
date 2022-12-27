/**
 * Name: Find the odd Int
 * Description: Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
 * Link: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
 */

function findOdd(nums) {
  const occurences = {}
  
  nums.forEach(num => {
    if(Object.hasOwn(occurences, num)) {
      occurences[num]++
    } else {
      occurences[num] = 1
    }
  })
  
  for(const [key, value] of Object.entries(occurences)) {
    if(value % 2 !== 0) return Number(key)
  }
}