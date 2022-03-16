/* This file houses eloquent js code tasks */


// Triangle task

// let str = '';
// for (let i = 0; i < 7; i++) {
//     str += '#'
//     console.log(str);
// }

// FizzBuzz

const fizzBuzz = n => {
    for (let i = 1; i <= n; i++) {
        console.log((((i % 3 === 0) ? 'fizz' : '') + ((i % 5 === 0) ? 'buzz' : '')) || i);
    }
}

fizzBuzz(15);
