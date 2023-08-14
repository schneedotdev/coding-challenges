/**
 * Name: Longest Consecutive Sequence
 * Description: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/description/
 */

function longestConsecutive(nums: number[]): number {
	if (nums.length < 2) return nums.length;

	const set = [...new Set(nums.sort((a, b) => a - b))];

	let longest, temp;
	for (let i = (longest = temp = 1); i < set.length; i++) {
		if (set[i] - 1 === set[i - 1]) {
			temp++;

			if (temp > longest) {
				longest = temp;
			}
		} else {
			temp = 1;
		}
	}

	return longest;
}
