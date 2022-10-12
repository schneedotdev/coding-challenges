/**
 * Name: Stringy Strings
 * Description: write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
 */

function stringy(size) {
    let str = '';

    for (let i = 0; i < size; i++) {
        if (i % 2 !== 0)
            str += 0;
        else
            str += 1;
    }

    return str;
}