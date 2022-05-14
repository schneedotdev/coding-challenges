/**
 * Name: Square(n) Sum
 * Description: [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
 */

const squareSum = nums => nums.reduce((a, b) => a += b * b, 0);