/**
 * Name: Power of Two
 * Decription: Determine whether a number n is a power of 2
 * Link: https://www.codewars.com/kata/534d0a229345375d520006a0/train/javascript
 */

function isPowerOfTwo(n) {
	return Math.log2(n) % 1 === 0;
}