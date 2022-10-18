/**
 * Name: Sum of Strings
 * Description: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
 */

function sumOfStrings(arr) {
    const sum = arr.reduce((sum, element) => sum + Number(element), 0)
    return sum
}

console.log(sumOfStrings([]), 0)
console.log(sumOfStrings([9, 3, '7', '3']), 22)
console.log(sumOfStrings(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42)
console.log(sumOfStrings(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41)