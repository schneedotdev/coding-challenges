/**
 * Name: Odd or Even
 * Description: given an array of numbers, find out whether the sum of elements is odd or even
 */

const oddOrEven = array => array.reduce((a, b) => a + b, 0) % 2 == 0 ? 'even' : 'odd'