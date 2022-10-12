/**
 * Name: Jaden Casing Strings
 * Description: Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
 */

String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => {
        const firstLetter = word[0]
        return word.replace(firstLetter, firstLetter.toUpperCase())
    }).join(' ')
};