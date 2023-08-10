/**
 * Name: 125 - Valid Palindrome
 * Description: A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.
 * Link: https://leetcode.com/problems/valid-palindrome/description/
 */

function isPalindrome(s: string): boolean {
	const chars = s
		.toLowerCase()
		.split('')
		.filter((c) => /[a-z0-9]/.test(c));

	const midpoint = Math.floor(chars.length / 2);
	for (let start = 0, end = chars.length - 1; start < midpoint; start++, end--) {
		const [charA, charB] = [chars[start], chars[end]];

		if (charA != charB) return false;
	}

	return true;
}
