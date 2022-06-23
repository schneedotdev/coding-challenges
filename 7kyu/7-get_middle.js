/**
 * Name: Get the Middle Character
 * Description: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
 * Link: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
 */
function getMiddle(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);
  return len % 2 ? s[mid] : s[mid - 1] + s[mid];
}