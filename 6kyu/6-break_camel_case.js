/**
 * Name: Break camelCase
 * Description: Complete the solution so that the function will break up camel casing, using a space between words.
 * 
 * Link: https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
 */

function solution(string) {
    return string.split('')
                 .map(char => char === char.toUpperCase() ? ' ' + char : char)
                 .join('');
}