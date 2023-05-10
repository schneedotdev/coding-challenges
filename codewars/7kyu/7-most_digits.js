/**
 * Name: Most Digits
 * Description: Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.

 * Link: https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript
 */

function findLongest(array) {
	let mostDigits = array[0];

	for (let i = 1; i < array.length; i++) {
		if (array[i].toString().length > mostDigits.toString().length) {
			mostDigits = array[i];
		}
	}

	return mostDigits;
}
