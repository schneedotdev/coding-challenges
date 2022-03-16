/**
 * This file will contain JS problems
 */


 /**
  * Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
  */

const digitize = n => String(n).split('').reverse().map(e => Number(e))

