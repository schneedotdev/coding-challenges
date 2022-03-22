// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'Halloween';
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'this is my string';
let len = str.length;
alert(str.substring(len - 4, len));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const subtractFrom100 = (a, b, c, d, e) => alert(Math.abs(100 - (a + b + c + d + e)));

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const logHighLow = (a, b, c) => {
    let arr = [a, b, c];
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));
}