/**
 * Name: Printer Errors
 * Description: count the number of occurences in a string an character not in range from a-m is within the string s. Output example: 4/32 where 4 represents the amount of out of range chanracters and 32 represents the total amount of characters
 */

function printerError(s) {
    return `${s.split('')
               .reduce((a, b) => !'abcdefghijklm'.includes(b) ? a += 1 : a += 0, 0)}/${s.length}`
}