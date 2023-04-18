/**
 * Name: Training JS #4: Basic data types--Array
 * Description: create a getLength, getFirst, getLast, pushElement, popElement on an array
 * Link: https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript
 */

const getLength = (arr) => arr.length;
const getFirst = (arr) => arr[0];
const getLast = (arr) => arr[getLength(arr) - 1];
const pushElement = (arr) => arr.push(1) && arr;
const popElement = (arr) => arr.pop() && arr;
