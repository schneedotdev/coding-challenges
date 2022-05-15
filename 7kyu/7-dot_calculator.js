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