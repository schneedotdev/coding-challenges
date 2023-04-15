/**
 * Name: Simple Calculator
 * Description: You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.
 * 
 * Your function will accept three arguments:
 * The first and second argument should be numbers.
 * The third argument should represent a sign indicating the operation to perform on these two numbers.
 * 
 * if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.
 * Link: https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript
 */

function calculator(a, b, sign){
  a = Number(a)
  b = Number(b)

  return ({
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b
  })[sign] || "unknown value"
}