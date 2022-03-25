// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let holiday = 'Halloween';
holiday = holiday.toUpperCase();
console.log(holiday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'this is my string';
let len = str.length;
// alert(str.substring(len - 3, len));
alert(str.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
const subtractFrom100 = (a, b, c, d, e) => alert(Math.abs(100 - (a + b + c + d + e)));

subtractFrom100(101, 5, 10, 20, 40);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
const logHighLow = (a, b, c) => {
    let arr = [a, b, c];
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));

    // arr = arr.sort()
    // console.log(`Min: ${arr[0]}`, `Max: ${arr[arr.length -1]}`)
}

logHighLow(30, 20, 88);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// const headsOrTails = () => Math.random() < .5 ? 'heads' : 'tails'
const headsOrTails = _ => Math.random() < .5 ? 'heads' : 'tails'
console.log(headsOrTails())

// *Arrays*
//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [1, 3, 5, 6, 7]
let sum = arr.reduce((acc, c) => acc + Number(c), 0) // ********
// let sum = arr.reduce((acc, c) => acc + +c, 0); // this is equal to the above
// let sum = arr.reduce((acc, c) => +acc + +c); // this is equal to both above
alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
const numsSquared = arr => arr.map(num => num * num);
console.log(numsSquared(arr));

//Create a function that takes string
//Print the reverse of that string to the console
const reverseString = str => str.split('').reverse().join('');
console.log(reverseString('guitar'))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

const isPalindrome = str => reverseString(str) === str ? true : false
console.log(isPalindrome('racecar'))