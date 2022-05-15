/**
 * Name: Battle of the Characters
 * Description: Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 variables and return the one who's stronger. Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
 */

function battle(x, y) {
    let xVal = x.split('').map(x => battle.alphabet.indexOf(x) + 1).reduce((prev, current) => prev += current)
    let yVal = y.split('').map(y => battle.alphabet.indexOf(y) + 1).reduce((prev, current) => prev += current)

    return xVal === yVal ? 'Tie!' : xVal > yVal ? x : y
}

battle.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']