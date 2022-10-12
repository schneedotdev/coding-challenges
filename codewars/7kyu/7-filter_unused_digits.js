/**
 * Name: Filter unused digits
 * Description: Given a varying number of integer arguments, return the digits that are not present in any of them. 
 * [12, 34, 56, 78]  =>  "09"
 * [2015, 8, 26]     =>  "3479"
 */

function unusedDigits(...nums) {
    let check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let missing = nums
        .map(num => (num + '').split('').map(num => ~~num))
        .flat(1)

    return check.filter(num => !(missing.includes(num))).join('')
}