/**
 * Name: Quarter of the year
 * Description: Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
 * Link: https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript
 */

const quarterOf = (month) => Math.ceil(month / 3);
