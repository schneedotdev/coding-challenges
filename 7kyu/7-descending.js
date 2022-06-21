/**
 * Name: Descending Order
 * Description: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
 * 
 * Link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
 */
function descendingOrder(n){
  return Number(
    (n + '')
    .split('')
    .sort((a, b) => b - a)
    .join('')
  );
}