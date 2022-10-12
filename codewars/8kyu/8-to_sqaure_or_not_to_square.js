/**
 * Name: To square(root) or not to square(root)
 * Description: If the number has an integer square root, take this, otherwise square the number.
 * 
 * [4,3,9,7,2,1] -> [2,9,3,49,4,1]
 */

function squareOrSquareRoot(array) {
    return array.map(elem => {
        return Math.sqrt(elem) % 1 === 0 ? Math.sqrt(elem) : elem ** 2
    })
}