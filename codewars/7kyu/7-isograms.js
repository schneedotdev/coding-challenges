/**
 * Name: Isograms
 * Description: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 */

const isIsogram = s => {
    return Object.keys(s.split('').reduce((a, b) => {
        a.found.includes(b.toLowerCase()) ? a[b] = b : a.found.push(b.toLowerCase());
        return a;
    }, { found: [] })).length === 1;
};