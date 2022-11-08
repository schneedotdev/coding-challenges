/**
 * Name: Find the middle element
 * Description: As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
 * Link: https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript
 */

function gimme(triplet) {
    return triplet.indexOf([...triplet].sort((a, b) => a - b)[1])
}