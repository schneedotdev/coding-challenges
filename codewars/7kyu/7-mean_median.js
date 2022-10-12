/**
 * Name: mean and median
 * Description: find the mean and median of an input of that has an unspecified amount of elements
 */
const input = [12, 32, 46, 64, 8, 8];
const sorted = input.sort((a, b) => a - b);

let lastIndex = sorted.length - 1;
let index = lastIndex / 2

if (lastIndex % 2 !== 0) {
    console.log(sorted[Math.floor(index)])
} else {
    console.log(sorted[index])
}

// reduce method but with an object as the default value with mean and median properties
input
    .sort((a, b) => a - b)
    .reduce((accumulator, currentValue, index, array) => {

        accumulator.mean += currentValue / array.length;

        if (Math.abs(index + 1 - array.length / 2) < 1) {
            accumulator.median = currentValue
        }

        return accumulator;
    }, { mean: 0, median: 0 });