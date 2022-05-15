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