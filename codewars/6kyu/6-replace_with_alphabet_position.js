/**
 * Name: Replace With Alphabet Position
 * Description: In this kata you are required to, given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
 */

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return text
    .split('')
    .map(char => {
      if(alphabet.includes(char.toLowerCase()))
        return alphabet.indexOf(char.toLowerCase()) + 1;
    })
    .filter(e => e !== undefined)
    .join(' ');
}