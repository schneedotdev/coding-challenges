/**
 * Name: Categorize New Croquet Member
 * Description: To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
 */

function openOrSenior(data) {
    return data.map(e => (e[0] > 54 && e[1] > 7) ? 'Senior' : 'Open')
}