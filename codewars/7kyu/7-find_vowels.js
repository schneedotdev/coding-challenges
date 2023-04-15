/**
 * Name: Find the vowels
 * Description: We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters). 
 * Link: https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
 */

function vowelIndices(word){
  return [...word.toLowerCase()].reduce((vowels, char, i) => {
    if('aeiouy'.includes(char)) vowels.push(i + 1)
    return vowels
  }, [])
}