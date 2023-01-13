/**
 * Name: Stop gninnipS My sdroW!
 * Description: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
 * Link: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
 */

function spinWords(words){
  return words.split(' ').map(word => {
    return word.length > 4 ? [...word].reverse().join('') : word
  }).join(' ')
}