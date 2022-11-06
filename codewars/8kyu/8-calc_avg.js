/**
 * Name: Calculate average 
 * Description: Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.

 * Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
 */

function findAverage(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length || 0
}