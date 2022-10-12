/**
 * Name: Remove the minimum
 * Description: Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
 */

// function removeSmallest(numbers) {
//   let min = Math.min(...numbers);

//   numbers.splice(numbers.indexOf(min), 1);

//   return numbers;
// }

function removeSmallest(numbers) {
    let min = Math.min(...numbers);
    let numsCopy = numbers;

    numsCopy.splice(numbers.indexOf(min), 1);

    return numsCopy;
}