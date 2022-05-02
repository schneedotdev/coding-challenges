/**
 * TheJSWay Tasks
 * Chapter 07 - Store Data in Arrays
 */

// Musketeers

let musketeers = ['Athos', 'Porthos', 'Aramis']

for (const musketeer of musketeers) {
    console.log(musketeer);
}

musketeers.push('D\'Artagnan');

musketeers.forEach(musk => console.log(musk));

musketeers = musketeers.filter(musk => musk !== 'Aramis')

for (const musketeer of musketeers) {
    console.log(musketeer)
}

// Sum of values

const values = [3, 11, 7, 2, 9, 10];

let sum = values.reduce((prev, current) => prev + current)

console.log(sum)

// Array Maximum

const values = [3, 11, 7, 2, 9, 10];

console.log(Math.max(...values))

// List of words

const arr = []
let input = prompt('Continue entering values. To stop entering values, type "stop"');

arr.push(input);

while (input !== 'stop') {
    input = prompt('Continue entering values. To stop entering values, type "stop"')
    arr.push(input)
}

if (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i])
    }
} else {
    console.log('only stop was input')
}