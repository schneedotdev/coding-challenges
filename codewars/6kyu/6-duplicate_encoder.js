/**
 * Name: Duplicate Encoder
 * Description: The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 * Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
 */

function duplicateEncode(word) {
    const copy = word.toLowerCase()

    return [...copy].map((char, i) => {
        if (copy.indexOf(char) !== copy.lastIndexOf(char)) {
            return ")"
        }
        return "("
    }).join('')
}
