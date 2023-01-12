/**
 * Name: Sum of Digits / Digital Root
 * Description: Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
 * Link: https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
 */

function digitalRoot(n) {
  let nums = n
  
  do {
    nums = reduce([...(nums + '')])
  } while ((nums + '').length > 1)
  
  return nums
}

function reduce(arr) {
  return arr.reduce((acc, cur) => acc + Number(cur), 0)
}