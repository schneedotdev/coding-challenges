/**
 * Name: Greet Me
 * Description: Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.
 * Link: https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript
 */

const greet = (name) => {
	const firstLetter = name[0].toUpperCase();
	return `Hello ${firstLetter + name.substring(1).toLowerCase()}!`;
};
