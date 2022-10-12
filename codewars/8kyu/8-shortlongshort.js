/**
 * Name: Short Long Short
 * Description: Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
 *
 * Link: https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
 */

function solution(a, b) {
	const arr = [a, b].sort((a, b) => a.length - b.length, 0);
	return arr[0] + arr[1] + arr[0];
}
