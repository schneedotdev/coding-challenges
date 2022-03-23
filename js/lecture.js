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