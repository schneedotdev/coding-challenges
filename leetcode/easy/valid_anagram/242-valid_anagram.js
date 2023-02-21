/**
 * Name: Valid Anagram
 * Description: Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Link: https://leetcode.com/problems/valid-anagram/
 */

const isAnagram = (str1, str2) => {
   if(str1.length !== str2.length) return false

   const freq1 = frequencyOfChars(str1)
   const freq2 = frequencyOfChars(str2)

   for(const [key, value] of Object.entries(freq1)) {
      if(freq2[key] !== value) return false
   }

   return true
};

const frequencyOfChars = (str) => {
   return str.split('').reduce((frequency, char) => {
      if(frequency[char]) {
         frequency[char]++
      } else {
         frequency[char] = 1
      }

      return frequency
   }, {})
};

module.exports = isAnagram