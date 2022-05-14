/**
 * Name: Find the first non-consecutive number
 * Description: Your task is to find the first element of an array that is not consecutive. By not consecutive we mean not exactly 1 larger than the previous element of the array.
 */

function firstNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1])
            return arr[i + 1]
    }

    return null;
}