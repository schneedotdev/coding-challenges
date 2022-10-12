/**
 * Name: Filling in an array (part 1)
 * Description: Write a function that produces an array with the numbers 0 to N-1 in it.
 * Link: https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript
 */

const arr = N => N ? [...Array(N)].map((x, i) => i) : []