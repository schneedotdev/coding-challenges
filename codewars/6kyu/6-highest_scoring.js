/**
 * Name: Highest Scoring Word
 * Description: Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

 * Link: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
 */

function high(arr){
  const words = arr.split(' ')
  const scores = words.map(word => {
    return [...word].reduce((sum, char) => sum + 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) + 1, 0)
  })
  
  return words[scores.indexOf(Math.max(...scores))]
}