/**
 * Name: howManyTrueValues
 * Description: Loop through an array of boolean values, return the number of instances you encounter a truthy value. The array may contain undefined and null values.
 */
function howManyTrueValues(array) {
    // loop through the array, total the amount of true values, reduce((acc, cur)) -> default 0
    const total = array.reduce((total, current) => {
        if (current === true)
            total++
        return total
    }, 0)

    return total
}

// alternative solution
// function howManyTrueValues(array) {
//   return array.filter((element) => element).length
// }

// log the input next to the expected output
console.log(howManyTrueValues([true, false, true]), 2)
console.log(howManyTrueValues([false, false, true]), 1)
console.log(howManyTrueValues([]), 0)
console.log(howManyTrueValues([null]), 0)
console.log(howManyTrueValues([false, false, false]), 0)