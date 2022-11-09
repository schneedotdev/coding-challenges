/**
 * Name: Reversing Words in a String
 * Description: You need to write a function that reverses the words in a given string. A word can also fit an empty string.
 * Link: https://www.codewars.com/kata/57a55c8b72292d057b000594/solutions/javascript?filter=me&sort=best_practice&invalids=false
 */

function reverse(string) {
    return string.split(' ').reverse().join(' ')
}