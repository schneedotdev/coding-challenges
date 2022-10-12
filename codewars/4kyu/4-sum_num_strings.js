/**
 * Name: Sum Strings as Numbers
 * Description: Given the string representations of two integers, return the string representation of the sum of those integers.
 * Link: https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
 */

const sumStrings = (a, b) => BigInt(a) + BigInt(b) + '';
