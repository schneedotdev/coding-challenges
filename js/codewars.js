/**
 * This file will contain JS problems
 */


 /**
  * Name: 
  * Description: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
  */

const digitize = n => String(n).split('').reverse().map(e => Number(e))


/**
 * Name: Remove First and Last Character
 * Description: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
 */

const removeChar = str => str.substring(1, str.length - 1);


/**
 * Name: Sum without highest and lowest number
 * Description: Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
 */

const sumArray = (array) => {
  if ((array !== undefined && array !== null) && array.length > 2) {
    let low = 0;
    let high = 0;
    let sum = 0;

    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[low]) {
        low = i;
      }

      if (array[i] > array[high]) {
        high = i;
      }
    }

    array.forEach((x, i) => {
      if (!(i === low || i === high)) {
        sum += x;
      }
    });
    return sum;
  }

  return 0;
}


/**
 * Name: How good are you really?
 * Description: There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!
 */

const betterThanAverage = (classPoints, yourPoints) => yourPoints > (classPoints.reduce((prev, current) => prev + current) / classPoints.length)