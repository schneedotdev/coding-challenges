/**
 * Name: Sum of Multiples
 * Description:
 *
 * Your Job - Find the sum of all multiples of n below m
 * Keep in Mind - n and m are natural numbers (positive integers) m is excluded from the multiples
 *
 * Link: https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
 */

function sumMul(n, m) {
	if (n >= m) return 'INVALID';

	let sum = 0;

	for (let i = n; i < m; i += n) {
		sum += i;
	}

	return sum;
}
