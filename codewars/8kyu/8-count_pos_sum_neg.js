/**
 * Name: Count of positives / sum of negatives
 * Description: Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
 */

function countPositivesSumNegatives(input) {
    return !input || input.length === 0 ? [] : input.reduce((a, b) => {
        if (b > 0)
            a[0] += 1
        else if (b < 0)
            a[1] += b

        return a
    }, [0, 0]);
}