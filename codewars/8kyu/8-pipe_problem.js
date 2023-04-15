/**
 * Name: Lario and Muigi Pipe Problem
 * Description: Issue

Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.
Task

Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included). 
 * Link: https://www.codewars.com/kata/56b29582461215098d00000f/train/javascript
 */

function pipeFix(nums){
  const [start, end] = [nums[0], nums[nums.length - 1]]
  const result = []
  
  for (let i = start; i <= end; i++) {
    result.push(i)
  }
  
  return result
}