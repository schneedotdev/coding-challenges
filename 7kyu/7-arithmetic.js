/**
 * Name: Make a function that does arithmetic!
 * Description: Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them. 
 * Link: https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript
 */
const arithmetic = (a, b, operator) => map[operator](a, b)

const map = {
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => a / b
}