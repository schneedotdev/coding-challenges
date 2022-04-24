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




/**
 * Name: Your order, please
 * Description: Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
 * Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
 * If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
 */

// function order(words) {
//   const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   let found = []

//   return words === '' ? words : words.split(' ').map((word, j) => {
//     return word.split('').map((char, i) => {
//       if (char in nums) {
//         found.push(char)
//         // return '' <--- include this to remove numbers from the string
//       }
//       return char;
//     }).join('');
//   }).map((word, i) => found[i] + word).sort().map(word => word.substring(1)).join(' ');
// }

/**
 * Name: Consecutive strings
 * Description: strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 */

function longestConsec(strarr, k) {
  let longest = '';
  let cur;

  if (k > 0 && k < strarr.length) {
    for (let i = 0; i <= strarr.length - k; i++) {
      cur = strarr.slice(i, i + k).join('');

      if (cur.length > longest.length)
        longest = cur;
    }
  }

  return longest;
}