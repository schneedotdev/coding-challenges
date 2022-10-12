/**
 * Name: Valid Parenthesis
 * Description: Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
 * 
 *      "()"              =>  true
 *      ")(()))"          =>  false
 *      "("               =>  false
 *      "(())((()())())"  =>  true
 *  
 * Link: https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript
 */

function validParentheses(parens) {
    const len = parens.length

    if (len < 2 && len > 0) return false

    for (let i = 0; i < len / 2; i++) {
        parens = parens.split('()').join('')
    }

    return parens === ''
}