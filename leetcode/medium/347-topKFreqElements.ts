/**
 * Name: Top K Frequent Elements
 * Description: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 */

function topKFrequent(nums: number[], k: number): number[] {
	const map = new Map<number, number>();

	nums.forEach((num) => {
		if (map.has(num)) {
			map.set(num, map.get(num)! + 1);
		} else {
			map.set(num, 1);
		}
	});

	const sorted = [...map].sort((a, b) => {
		return a[1] - b[1];
	});

	const result: number[] = [];

	for (let i = 0; i < k; i++) {
		result.push(sorted[sorted.length - 1 - i][0]);
	}

	return result;
}