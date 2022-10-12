/**
 * Name: Array.diff
 * Description: It should remove all values from list a, which are present in list b keeping their order. If a value is present in b, all of its occurrences must be removed from the other
 */

const arrayDiff = (a, b) => b ? a.filter(num => !b.includes(num)) : a