/**
 * Name: Find the stray number
 * Description: You are given an odd-length array of integers, in which all of them are the same, except for one single number. Complete the method which accepts such an array, and returns that single different number.
 * Link: https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript
 */

function stray(numbers) {
    numbers.sort((a, b) => a - b)
    if (numbers[0] === numbers[1]) return numbers[numbers.length - 1]
    return numbers[0]
}