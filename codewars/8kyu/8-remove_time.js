/**
 * Name: Remove the time
 * Description: Write a function that takes the website date/time in its original string format and returns the shortened format.
 * Link: https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript
 */

function shortenToDate(longDate) {
	const [weekday, month, day, time] = longDate.split(' ');
	return `${weekday} ${month} ${day.slice(0, -1)}`;
}