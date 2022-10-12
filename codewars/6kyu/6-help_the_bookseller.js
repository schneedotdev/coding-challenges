/**
 * Name: Help the Bookseller !
 *
 * Description: A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.
 *
 * In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.
 *
 * You will be given a stocklist (e.g. : L) and a list of categories in capital letters  and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.
 *
 * For the lists L and M of example you have to return the string: (A : 20) - (B : 114) - (C : 50) - (W : 0)
 *
 * f L or M are empty return string is ""
 *
 * Link: https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript
 */

function stockList(arr1, arr2) {
	const obj = arr2.reduce((obj, key) => ({ ...obj, [key]: 0 }), {});
	const result = [];
	let sum = 0;

	arr1.map((e) => e.split(' ')).forEach((arr) => {
		const key = arr[0][0];

		if (key in obj) obj[key] += ~~arr[1];
	});

	for (const [key, value] of Object.entries(obj)) {
		result.push(`(${key} : ${value})`);
		sum += value;
	}

	return sum ? result.join(' - ') : '';
}
