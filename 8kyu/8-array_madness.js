/**
 * Name: SpeedCode #2 - Array Madness
 * Description: Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
 *
 * Link: https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript
 */

function arrayMadness(a, b) {
	return (
		a.reduce((pv, cv) => pv + cv ** 2, 0) >
		b.reduce((pv, cv) => pv + cv ** 3, 0)
	);
}
