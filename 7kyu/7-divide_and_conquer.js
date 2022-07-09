/**
 * Name: Divide and Conquer
 * Description: Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
 * Link: https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
 */

function divCon(x) {
	const sumObj = x.reduce(
		(a, c) => {
			if (typeof c === 'number') {
				a.nums += c;
			} else {
				a.strInts += Number(c);
			}

			return a;
		},
		{ nums: 0, strInts: 0 },
	);

	return sumObj.nums - sumObj.strInts;
}
