/**
 * Name: Return the closest number multiple of 10
 * Description: Given a number return the closest number to it that is divisible by 10.
 */

const closestMultiple10 = num => {
    let integer = ~~num
    let lastDigit = ~~(integer + '').slice(-1)

    if (lastDigit < 5) {
        integer -= lastDigit;
    } else {
        integer += (10 - lastDigit)
    }

    return integer;
};