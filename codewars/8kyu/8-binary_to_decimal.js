/**
 * Name: Binary to Decimal
 * Description: Convert a binary string to decimal
 */

function binToDec(bin) {
    return bin.split('').reverse().map((num, i) => 2 ** i * num).reduce((a, b) => a + b, 0)
}