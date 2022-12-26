/**
 * Name: Detect Pangram
 * Description: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant). Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 * Link: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 */

function isPangram(string){
  const valid = 'abcdefghijklmnopqrstuvwxyz'
  const letters = {}
  
  string
    .toLowerCase()
    .split('')
    .forEach(letter => {
      if(valid.indexOf(letter) + 1) {
        letters[letter] = true
      }
    })
  
  return Object.keys(letters).length === 26
}