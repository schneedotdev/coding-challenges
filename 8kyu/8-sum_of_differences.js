/**
 * Name: Sum of differences in array
 * Description: Your task is to sum the differences between consecutive pairs in the array in descending order.
 * Link: https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/javascript
 */

function sumOfDifferences(arr) {
	if (!arr.length) return 0;

	arr = arr.sort((a, b) => b - a);

	return arr[0] - arr[arr.length - 1];
}
