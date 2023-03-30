/**
 * Name: Regex count lowercase letters
 * Description: Your task is simply to count the total number of lowercase letters in a string.
 * Link: https://www.codewars.com/kata/56a946cd7bd95ccab2000055/train/javascript
 */

function lowercaseCount(str) {
	return [...str].reduce((count, char) => {
		const charCode = char.charCodeAt(0);
		return charCode >= 97 && charCode <= 122 ? count + 1 : count;
	}, 0);
}
