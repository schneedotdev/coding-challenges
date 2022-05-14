/**
 * Name: Shortest Word
 * Description: Simple, given a string of words, return the length of the shortest word(s).
 */

const findShort = s => s.split(' ').reduce((a, b) => b.length < a.length ? b : a).length