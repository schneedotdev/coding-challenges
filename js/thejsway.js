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
