/**
 * Name: Moving zeros to the end
 * Description: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * Link: https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
 */

function moveZeros(arr) {
	const zeros = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			zeros.push(arr.splice(i, 1)[0]);
			i--;
		}
	}

	return arr.concat(zeros);
}

function moveZeros2(nums) {
  const arr = nums.filter((num) => num !== 0)
  const diff = nums.length - arr.length
  return arr.concat([...'0'.repeat(diff)].map(Number))
}
