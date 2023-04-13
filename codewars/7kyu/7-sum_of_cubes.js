/**
 * Name: Sum of Cubes
 * Description: Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
 * Link: https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
 */

function sumCubes(n) {
	let sum = 0;

	for (let i = 1; i <= n; ++i) {
		sum += i ** 3;
	}

	return sum;
}
