/**
 * Name: Count characters in your string
 * Description: The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}. What if the string is empty? Then the result should be empty object literal, {}.

 */

function count(string) {
  let arr = []
  let counter = {}

  string.split('').forEach(char => {
    if (!arr.includes(char)) {
      arr.push(char)
      counter[char] = 1
    } else {
      counter[char]++
    }
  });

  return counter;
}