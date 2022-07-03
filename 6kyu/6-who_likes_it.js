/**
 * Name: Who likes it?
 * Description:
 * []                                -->  "no one likes this"
 * ["Peter"]                         -->  "Peter likes this"
 * ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
 * ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
 * ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
 *
 * Link: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
 */

function likes(names) {
	if (!names.length) return 'no one likes this';
	if (names.length === 1) return `${names[0]} likes this`;
	if (names.length === 2) return `${names.join(' and ')} like this`;

	const firstTwo = `${names[0]}, ${names[1]}`;

	if (names.length === 3) return `${firstTwo} and ${names[2]} like this`;

	return `${firstTwo} and ${names.length - 2} others like this`;
}
