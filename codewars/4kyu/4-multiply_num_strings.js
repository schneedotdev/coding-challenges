/**
 * Name: Multiply Strings as Numbers
 * Description: Multiply two numbers! Simple!
 *
 * - The arguments are passed as strings.
 * - The numbers may be way very large
 * - Answer should be returned as a string
 * - The returned "number" should not start with zeros e.g. 0123 is invalid
 *
 * Link: https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript
 */

const multiply = (a, b) => BigInt(a) * BigInt(b) + '';
