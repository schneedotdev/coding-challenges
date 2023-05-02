/**
 * Name: Contamination #1 -String-
 * Description: If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!! Note: The character is a string of length 1 or an empty string.
 * Link: https://www.codewars.com/kata/596fba44963025c878000039/train/javascript
 */

function contamination(text, char) {
	if (text === '' || char === '') return '';

	return char.repeat(text.length);
}
