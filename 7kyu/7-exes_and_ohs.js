/**
 * Name: Exes and Ohs
 * Description: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
 * Link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
 */

function XO(str) {
    if (str === '') return true

    let a = str.toLowerCase().match(/x/g)
    let b = str.toLowerCase().match(/o/g)

    return a && b ? a.length === b.length : false
}