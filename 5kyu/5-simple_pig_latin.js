/**
 * Name: Simple Pig Latin
 * Description: Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 * 
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 * 
 * Link: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 */

function pigIt(str) {
    return str.split(' ').map(s => {
        s = s.slice(1) + s[0]
        return ['!', '?'].includes(s) ? s : s + 'ay'
    }).join(' ')
}