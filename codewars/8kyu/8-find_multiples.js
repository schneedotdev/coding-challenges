/**
 * Name: Find multiples of a number
 * Description: In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.
 * Link: https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
 */

function findMultiples(x, limit) {
  const multiples = []
  
  for(let i = 1; i <= limit / x; i++) {
    multiples.push(x * i)
  }
  
  return multiples
}