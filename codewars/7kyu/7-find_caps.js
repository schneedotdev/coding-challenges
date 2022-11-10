/**
 * Name: Find the capitals
 * Description: Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
 * Link: https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
 */

var capitals = function (word) {
    let arr = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase())
            arr.push(i)
    }
    return arr
};