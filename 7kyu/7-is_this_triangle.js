/**
 * Name: Is this a triangle?
 * Description: Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
 */

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;