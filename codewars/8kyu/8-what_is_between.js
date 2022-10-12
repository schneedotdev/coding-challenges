/**
 * Name: What is between?
 * Description: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
 * Link: https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript
 */

function between(a, b) {
	let arr = [a];

	while (arr[arr.length - 1] < b) {
		arr.push(arr[arr.length - 1] + 1);
	}

	return arr;
}
