/**
 * This file will contain CodeWars problems of 6 kyu difficulty
 */

 /**
  * Name: Array Helpers
  * Description:
  * 
    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers

  */

Array.prototype.square = _ => this.map(num => num ** 2)

Array.prototype.cube = _ => this.map(num => num ** 3)

Array.prototype.average = function () {
    let len = this.length;
    let sum = this.reduce((acc, cur) => acc + cur, 0);
    return sum / len;
}

Array.prototype.sum = _ => this.reduce((acc, cur) => acc + cur, 0);

Array.prototype.even = _ => this.filter(num => num % 2 === 0);

Array.prototype.odd = _ => this.filter(num => num % 2 !== 0);



/**
 * Name: Array.diff
 * Description: It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other
 */

const arrayDiff = (a, b) => b ? a.filter(num => !b.includes(num)) : a


/**
 * Name: Count characters in your string
 * Description: The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

 */

function count(string) {
  let arr = []
  let counter = {}

  string.split('').forEach(char => {
    if (!arr.includes(char)) {
      arr.push(char)
      counter[char] = 1
    } else {
      counter[char]++
    }
  });

  return counter;
}

/**
 * Name: Data Reverse
 * Description: 
 * 11111111  00000000  00001111  10101010
 * (byte1)   (byte2)   (byte3)   (byte4)
 *
 * should become
 *
 * 10101010  00001111  00000000  11111111
 * (byte4)   (byte3)   (byte2)   (byte1)
 *
 * Data is given as: [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
 */

function dataReverse(data) {
  let data_copy = []

  data.reverse()

  while (data.length)
    data_copy.push(data.splice(0, 8).reverse());

  return [].concat.apply([], data_copy); // data_copy.flat(1) <-- 1 defines the depth
}


/**
 * Name: Multiples of 3 or 5
 * Description: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
 */

function solution(number) {
  let arr = []

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0)
      arr.push(i)
  }

  return [...new Set(arr)].reduce((a, b) => a + b, 0);
}

