/**
 * Name: Cat years, Dog years
 * Description: convert human years into cat and dog years
 */

var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears;
    let dogYears;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else {
        let mult = humanYears - 2;
        dogYears = 24 + mult * 5;
        catYears = 24 + mult * 4;
    }

    return [humanYears, catYears, dogYears];
}