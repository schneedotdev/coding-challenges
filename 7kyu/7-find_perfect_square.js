/**
 * Name: Find the next perfect square!
 * Description:  Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
 */

function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) {
        return -1;
    }

    do {
        sq++;
    } while (Math.sqrt(sq) % 1 !== 0)

    return sq;
}