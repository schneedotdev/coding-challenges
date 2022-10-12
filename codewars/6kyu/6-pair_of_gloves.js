/**
 * Name: Pair of gloves
 * Description: The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
 *
 * Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
 *
 * Link: https://www.codewars.com/kata/58235a167a8cb37e1a0000db/javascript
 */

function numberOfPairs(gloves) {
	const count = {};

	gloves.forEach((glove) => {
		count[glove] = (count[glove] || 0) + 1;
	});

	return Object.values(count)
		.map((e) => Math.floor(e / 2))
		.reduce((a, b) => a + b, 0);
}
