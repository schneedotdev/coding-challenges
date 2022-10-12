/**
 * Name: Divide and Conquer
 * Description: Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
 * Link: https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
 */

const divCon = (x) => x.reduce((a, c) => typeof c === 'number' ? a + c : a - Number(c), 0);
