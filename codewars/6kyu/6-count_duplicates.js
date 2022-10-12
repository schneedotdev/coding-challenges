/**
 * Name: Counting Duplicates
 * Description: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 */

function duplicateCount(text) {
  return Object.values(text.toLowerCase().split('').reduce((encountered, char) => {
    if (char in encountered)
      encountered[char]++;
    else
      encountered[char] = 0

    return encountered;
  }, {})).filter(key => key > 0).length;
}