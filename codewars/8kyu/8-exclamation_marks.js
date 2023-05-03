/**
 * Name: Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
 * Description: Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
 * Link: https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed/train/javascript
 */

const vowelMap = {
	'a': '!',
	'e': '!',
	'i': '!',
	'o': '!',
	'u': '!',
	'A': '!',
	'E': '!',
	'I': '!',
	'O': '!',
	'U': '!',
};

function replace(s) {
	return [...s].map((char) => vowelMap[char] || char).join('');
}
