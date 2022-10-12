/**
 * Name: Split Strings
 * Description: Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 * Link: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
 */

function solution(str) {
    let arr = Array(Math.ceil(str.length / 2))

    for (let i = 0; i < arr.length; i++) {
        arr[i] = str[i * 2] + (str[i * 2 + 1] || '_')
    }

    return arr
}