/**
 * Name: Where my anagrams at?
 * Description: Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
 * Link: https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
 */

function anagrams(word, words) {
    return words.filter(s => {
        if (s.split('').sort().join('') === word.split('').sort().join('')) return s
    })
}