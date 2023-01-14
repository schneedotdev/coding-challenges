/**
 * Name: Find The Parity Outlier
 * Description: You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
 * Link: https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
 */

function findOutlier(integers){
  const { even, odd } = integers.reduce(({ even, odd }, int) => {
    int % 2 ? odd.push(int) : even.push(int)
    return { even, odd }
  }, { even: [], odd: [] })
  
  return (even.length === 1 ? even : odd)[0]
}