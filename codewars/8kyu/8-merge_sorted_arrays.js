/**
 * Name: Merge two sorted arrays into one
 * Description: You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
 */

function mergeArrays(arr1, arr2) {
    let mergedNums = arr1.concat(arr2);
    let uniqueNums = [...new Set(mergedNums)];
    return uniqueNums.sort((a, b) => a - b);
}