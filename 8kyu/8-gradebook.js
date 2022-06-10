/**
 * Name: Grasshopper - Grade book
 * Description: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
 * Link: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
 */

function getGrade(s1, s2, s3) {
	const avg = (s1 + s2 + s3) / 3;
	return avg >= 90
		? 'A'
		: avg >= 80
		? 'B'
		: avg >= 70
		? 'C'
		: avg >= 60
		? 'D'
		: 'F';
}
