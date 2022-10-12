/**
 * Name: Sum of two lowest positive integers
 * Description: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
 *
 * Link: https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript
 */

function sumTwoSmallestNumbers(numbers) {
	let min = Math.min(...numbers);
	numbers.splice(numbers.indexOf(min), 1);
	return min + Math.min(...numbers);
}
