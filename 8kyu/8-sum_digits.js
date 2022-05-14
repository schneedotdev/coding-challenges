/**
 * Name: Summing a number's digits
 * Description: Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
 */

function sumDigits(number) {
    let str = String(Math.abs(number))
    return Number(str.split('').reduce((a, b) => Number(a) + Number(b)))
}