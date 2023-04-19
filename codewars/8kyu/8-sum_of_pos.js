/**
 * Name: Sum of positive
 * Descriptiom: find the sum of all positive integers
 * Link: https://www.codewars.com/kata/5715eaedb436cf5606000381
 */

const positiveSum = (nums) =>
	nums.reduce((sum, num) => sum + Number(num > 0 && num), 0);
