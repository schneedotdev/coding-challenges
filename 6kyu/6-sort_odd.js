/**
 * Name: Sort the odd
 * Description: You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 * Link: https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
 */

function sortArray(array) {
    const odd = array.filter(n => n % 2)
    odd.sort((a, b) => a - b)

    return array.map(n => n % 2 ? odd.shift() : n)
}