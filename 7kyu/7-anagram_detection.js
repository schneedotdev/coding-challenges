/**
 * Name: Anagram Detection
 * Description: Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise. An anagram is the result of rearranging the letters of a word to produce a new word 
 * Link: https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
 */

const isAnagram = (str1, str2) => sort(str1) == sort(str2)

const sort = str => [...str.toLowerCase()].sort().join('')