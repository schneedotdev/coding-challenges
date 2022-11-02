/**
 * Name: Mathematical operations
 * Description: Your task is to create a function that does four basic mathematical operations (add, subtract, multiply, divide).
 * Link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
 */

const basicOp = (operation, val1, val2) => ({
    '+': _ => val1 + val2,
    '-': _ => val1 - val2,
    '*': _ => val1 * val2,
    '/': _ => val1 / val2
})[operation]()