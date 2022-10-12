/**
 * Name: How good are you really?
 * Description: There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.
 */

function betterThanAverage(classPoints, yourPoints) {
    return (classPoints.reduce((acc, cur) => acc + cur, 0) / classPoints.length) < yourPoints
}