/** IN PROGRESS
 * Name: Title Case
 * Description: Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
 */

function titleCase(title) {
    let arr = title.split(' ')
    let words = ['a', 'and', 'in', 'the']

    arr = arr.map((word, i) => {
        word = word.toLowerCase();

        if (i === 0 || !words.includes(word)) {
            const c = word.charAt(0)
            word = word.replace(c, c.toUpperCase())
        }


        return word
    })

    return arr.join(' ');
}