/**
 * Name: Love is friendship
 * Description: our task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.
 * Link: https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript
 */

function wordsToMarks(string){
  return [...string].reduce((sum, char) => sum + 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) + 1, 0)
}