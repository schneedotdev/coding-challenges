/**
 * Name: Alphabet war
 * Description: Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
 */

function alphabetWar(fight) {
    const letters = {
        's': function () { this.left++ },
        'b': function () { this.left += 2 },
        'p': function () { this.left += 3 },
        'w': function () { this.left += 4 },
        'z': function () { this.right++ },
        'd': function () { this.right += 2 },
        'q': function () { this.right += 3 },
        'm': function () { this.right += 4 },
        left: 0,
        right: 0
    }

    fight.split('').forEach(letter => {
        if (letter in letters)
            letters[letter]()
    })

    if (letters.left > letters.right)
        return "Left side wins!"
    else if (letters.left < letters.right)
        return "Right side wins!"
    else
        return "Let's fight again!"
}