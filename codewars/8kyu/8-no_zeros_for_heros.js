/**
 * Name: No zeros for heros
 * Description: Get rid of the trailing zero's
 * Link: https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript
 */

function noBoringZeros(n) {
	while (n % 10 === 0 && n !== 0) {
		n /= 10;
	}

	return n;
}
