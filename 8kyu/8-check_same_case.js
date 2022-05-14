/**
 * Name: Check same case
 * Description: 
 * 'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
 */

function sameCase(a, b) {
    console.log(a, b)
    if (!a.match(/[a-z]/i) || !b.match(/[a-z]/i)) return -1;

    let case1 = a.toUpperCase() === a && b.toUpperCase() === b;
    let case2 = a.toLowerCase() === a && b.toLowerCase() === b;

    if (case1 || case2)
        return 1

    return 0;
}