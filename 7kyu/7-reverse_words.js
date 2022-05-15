/**
 * Name: Reverse words
 * Description: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. 
 * "This is an example!" ==> "sihT si na !elpmaxe"
 * "double  spaces"      ==> "elbuod  secaps"
 */

const reverseWords = str => str.split(' ').map(word => [...word].reverse().join('')).join(' ');