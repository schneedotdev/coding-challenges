/**
 * Name: Alternate capitalization
 * Description: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even. For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
 */

function capitalize(s) {
    let arr1 = [];
    let arr2 = [];

    s.split('').forEach((char, i) => {
        if (i % 2 === 0) {
            arr1.push(char.toUpperCase());
            arr2.push(char.toLowerCase());
        } else {
            arr2.push(char.toUpperCase());
            arr1.push(char.toLowerCase());
        }
    });

    return [arr1.join(''), arr2.join('')];
};