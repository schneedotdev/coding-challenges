/**
 * Name: Remove the minimum
 * Description: Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
 * Link: https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
 */

function removeSmallest(numbers) {
  const copy = numbers.slice()
  const min = Math.min(...copy)
  const indexOfMin = numbers.indexOf(min)
  return numbers.filter((num, i) => i !== indexOfMin)
}

function removeSmallest(numbers) {
  const copy = numbers.slice()
  
  for(let i = 0; i < copy.length; i++) {
    for(let j = i; j < copy.length; j++) {
      if (copy[j] < copy[i]) {
        [copy[i], copy[j]] = [copy[j], copy[i]]
      }
    }
  }
  
  const indexOfMin = numbers.indexOf(copy[0])
  
  return numbers.filter((num, i) => i !== indexOfMin)
 }