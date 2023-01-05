/**
 * Name: Add Length
 * Description: Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
 * 
 * "apple ban" --> ["apple 5", "ban 3"]
 * "you will win" -->["you 3", "will 4", "win 3"]
 * 
 * Link: https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript
 */

function addLength(str) {
  return str.split(' ').map(word => {
    return `${word} ${word.length}`
  })
}
