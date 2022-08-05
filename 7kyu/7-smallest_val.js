/**
 * Name: Smallest value of an array
 * Description: Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
 * Link: https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
 */

function min(arr, toReturn) {
    const min = Math.min(...arr);
    
    if(toReturn === 'value') return min
    return arr.indexOf(min);
}