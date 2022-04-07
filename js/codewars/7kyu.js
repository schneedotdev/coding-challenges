/**
 * This file will contain CodeWars problems of 7 kyu difficulty
 */

/**
 * Name: Dot Calculator
 * Description: You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
 * "..... + ..............." => "...................."
 * "..... - ..."             => ".."
 * "..... - ."               => "...."
 * "..... * ..."             => "..............."
 * "..... * .."              => ".........."
 * "..... // .."             => ".."
 * "..... // ."              => "....."
 * ". // .."                 => ""
 * ".. - .."                 => ""
 * 
 */

function dotCalculator(equation) {
    let [a, operator, b] = equation.split(' ');

    a = a.length;
    b = b.length;

    let result = operation[operator](a, b);

    return '.'.repeat(result);
}

let operation = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '*': function (a, b) { return a * b },
    '//': function (a, b) { return Math.floor(a / b) }
}

/**
 * Name: Jaden Casing Strings
 * Description: Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 */

String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => {
        const firstLetter = word[0]
        return word.replace(firstLetter, firstLetter.toUpperCase())
    }).join(' ')
};

/**
 * Name: mean and median
 * Description: find the mean and median of an input of that has an unspecified amount of elements
 */
const input = [12, 32, 46, 64, 8, 8];
const sorted = input.sort((a, b) => a - b);

let lastIndex = sorted.length - 1;
let index = lastIndex / 2

if (lastIndex % 2 !== 0) {
    console.log(sorted[Math.floor(index)])
} else {
    console.log(sorted[index])
}

// reduce method but with an object as the default value with mean and median properties
input
    .sort((a, b) => a - b)
    .reduce((accumulator, currentValue, index, array) => {

        accumulator.mean += currentValue / array.length;

        if (Math.abs(index + 1 - array.length / 2) < 1) {
            accumulator.median = currentValue
        }

        return accumulator;
    }, { mean: 0, median: 0 });

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

/** IN PROGRESS
 * Name: Title Case
 * Description: Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
 */

function titleCase(title) {
    let arr = title.split(' ')
    let words = ['a', 'and', 'in', 'the']

    arr = arr.map((word, i) => {
        word = word.toLowerCase();

        if (i === 0 || !words.includes(word)) {
            const c = word.charAt(0)
            word = word.replace(c, c.toUpperCase())
        }


        return word
    })

    return arr.join(' ');
}