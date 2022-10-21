/**
 * Name: Even numbers in an array
 * Description: Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
 * Link: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript
 */

function evenNumbers(array, number) {
    let even = array.filter(num => num % 2 === 0)
    return even.slice(even.length - number)
}