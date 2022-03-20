/**
 * TheJSWay Tasks
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
