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

/**
 * Name: Is this a triangle?
 * Description: Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
 */

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

/**
 * Name: Filter unused digits
 * Description: Given a varying number of integer arguments, return the digits that are not present in any of them. 
 * [12, 34, 56, 78]  =>  "09"
 * [2015, 8, 26]     =>  "3479"
 */

function unusedDigits(...nums) {
    let check = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let missing = nums
        .map(num => (num + '').split('').map(num => ~~num))
        .flat(1)

    return check.filter(num => !(missing.includes(num))).join('')
}

/**
 * Name: Square Every Digit
 * Description: You are asked to square every digit of a number and concatenate them. For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
 */

const squareDigits = num => Number((num + '').split('').map(e => (~~e) ** 2).join(''))

/**
 * Name: Categorize New Croquet Member
 * Description: To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
 */

function openOrSenior(data) {
    return data.map(e => (e[0] > 54 && e[1] > 7) ? 'Senior' : 'Open')
}

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

/**
 * Name: Reverse words
 * Description: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. 
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 */

const reverseWords = str => str.split(' ').map(word => [...word].reverse().join('')).join(' ');

/**
 * Name: Odd or Even
 * Description: given an array of numbers, find out whether the sum of elements is odd or even
 */

const oddOrEven = array => array.reduce((a, b) => a + b, 0) % 2 == 0 ? 'even' : 'odd'

/**
 * Name: String ends with?
 * Description: Check to see whether a string ends with a substring
 */

const solution = (str, ending) => str.endsWith(ending)

/**
 * Name: Printer Errors
 * Description: count the number of occurences in a string an character not in range from a-m is within the string s. Output example: 4/32 where 4 represents the amount of out of range chanracters and 32 represents the total amount of characters
 */

function printerError(s) {
    return `${s.split('')
               .reduce((a, b) => !'abcdefghijklm'.includes(b) ? a += 1 : a += 0, 0)}/${s.length}`
}

/**
 * Name: Isograms
 * Description: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */

const isIsogram = s => {
    return Object.keys(s.split('').reduce((a, b) => {
        a.found.includes(b.toLowerCase()) ? a[b] = b : a.found.push(b.toLowerCase());
        return a;
    }, { found: [] })).length === 1;
};

/**
 * Name: Binary Addition
 * Description: Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
 */

function addBinary(a, b) {
    return (a + b).toString(2)
}

/**
 * Name: Javascript Array Filter
 * Description: filter odd numbers out
 */

function getEvenNumbers(numbersArray){
  return numbersArray.filter(num => num % 2 === 0)
}

/**
 * Name: Vowel Count
 * Description: Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.

 */

function getCount(str) {
  return str.split('').reduce((a, b) => {
    if(a.vowels.includes(b))
      a.count += 1;
    
    return a;
  }, { vowels: ['a', 'e', 'i', 'o', 'u'], count: 0 }).count
}

/**
 * Name: Bingo (Or Not)
 * Description: For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array). Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

 */

function bingo(a) {
  return [2, 9, 14, 7, 15].filter(e => a.includes(e)).length === 5 ? 'WIN' : 'LOSE';
}