/**
 * Name: Container with most water
 * Description: You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.
 * Link: https://leetcode.com/problems/container-with-most-water/description/
 */

// function maxArea(height: number[]): number {
//     const maxValues: number[] = [];

//     for (let i = 0; i < height.length - 1; i++) {
//         const values: number[] = [];
//         for (let j = i + 1; j < height.length; j++) {
//             const min = Math.min(height[i], height[j]);
//             values.push(min * (j - i));
//         }
//         maxValues.push(Math.max(...values));
//     }

//     return Math.max(...maxValues);
// };

function maxArea(height: number[]): number {
	let maxValue = 0;

	for (let i = 0; i < height.length - 1; i++) {
		let max = 0;

		for (let j = i + 1; j < height.length; j++) {
			const min = Math.min(height[i], height[j]);
			const cur = min * (j - i);

			if (cur > max) {
				max = cur;
			}
		}

		if (max > maxValue) {
			maxValue = max;
		}
	}

	return maxValue;
}
