/**
 * Name: Fake Binary
 * Description: replace all digits in a string that are below 5 with 0 and above or equal with 1
 */

const fakeBin = x => x.split('').map(char => char < 5 ? 0 : 1).join('');