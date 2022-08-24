/**
 * Name: Switcheroo
 * Description: Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
 * Link: https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
 */

function switcheroo(x) {
    return [...x].map((c) => c === 'a' ? 'b' : c === 'b' ? 'a' : 'c').join('')
}