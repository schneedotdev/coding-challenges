/**
 * Name: pick a set of first elements
 * Description: Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence. If n == 0 return an empty sequence []
 * Link: https://www.codewars.com/kata/572b77262bedd351e9000076/solutions/javascript?filter=me&sort=best_practice&invalids=false
 */

function first(arr, n) {
    if(n === undefined) return [arr[0]]

    const newArr = []
  
    for(let i = 0; i < n && i < arr.length; i++) {
        newArr.push(arr[i])
    }
  
    return newArr
}