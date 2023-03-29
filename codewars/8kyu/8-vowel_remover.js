/**
 * Name: Vowel remover
 * Description: Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
 * Link: https://www.codewars.com/kata/5547929140907378f9000039/train/javascript
 */

const shortcut = (str) =>
	[...str].filter((char) => !'aeiou'.includes(char)).join('');
