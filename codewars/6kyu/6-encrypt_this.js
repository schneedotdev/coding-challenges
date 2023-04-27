/**
 * Name: Encrypt This!
 * Description: conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

 * Link: https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
 */

function encryptThis(text) {
	return text
		.split(' ')
		.map((word) => {
			return word.charCodeAt(0) + swapLetters(word, 1, word.length - 1);
		})
		.join(' ');
}

function swapLetters(str, i, j) {
	if (i < 0 || i >= str.length || j < 0 || j >= str.length) {
		return '';
	}

	const chars = str.split('');
	const temp = chars[i];
	chars[i] = chars[j];
	chars[j] = temp;

	return chars.join('').slice(1);
}