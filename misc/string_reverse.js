/**
 * Reverse a string without string methods
 */

function reverse(string) {
    let reverse = ''
    for(let char of string) {
        reverse = char + reverse
    }
    return reverse
}

console.log(reverse('hello'))