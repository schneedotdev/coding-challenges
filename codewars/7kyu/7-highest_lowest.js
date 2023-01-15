/**
 * Name: Highest and Lowest
 * Description: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
 * Link: https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
 */

function highAndLow(numbers){
  const arr = numbers.split(' ').sort((a, b) => Number(a) - Number(b))
  return `${arr.at(-1)} ${arr.at(0)}`
}