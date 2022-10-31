/**
 * Name: Sort by last char
 * Description: Sort a string that contains words by the last letter of a word
 */

// function sortByLastChar(x) {
//     return x.split(' ')
//         .sort((a, b) => {
//             return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
//         })
// }

function sortByLastChar(x) {
    return x.split(' ')
        .sort((a, b) => {
            return a.charAt(a.length - 1).localeCompare(b.charAt(b.length - 1))
        })
}