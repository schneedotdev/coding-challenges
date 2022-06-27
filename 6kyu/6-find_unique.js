/**
 * Name: Find the unique number
 * Description: There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * Link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
 */

function findUniq(arr) {
  const set = [...new Set(arr)];
  return arr.filter(n => n === set[0]).length > 1 ? set[1] : set[0];
}