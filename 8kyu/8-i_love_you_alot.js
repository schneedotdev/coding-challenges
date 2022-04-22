/**
 * Name: I love you, a little , a lot, passionately ... not at all
 * Description:
 *
 * I love you
 * a little
 * a lot
 * passionately
 * madly
 * not at all
 *
 * Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
 */

const howMuchILoveYou = (i) => {
	const circularArray = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	];
	const n = circularArray.length;
	return circularArray[(((i - 1) % n) + n) % n];
};
