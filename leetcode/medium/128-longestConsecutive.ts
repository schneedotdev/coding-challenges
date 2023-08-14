/**
 * Name: Longest Consecutive Sequence
 * Description: Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.
 * Link: https://leetcode.com/problems/longest-consecutive-sequence/description/
 */

function longestConsecutive(nums: number[]): number {
    if (!nums.length) return 0;
    if (nums.length == 1) return 1;

    nums = [...new Set(nums.sort((a, b) => a - b))];

    let longest, temp;
    for (let i = longest = temp = 1; i < nums.length; i++) {
        if ((nums[i] - 1) === nums[i - 1]) {
            temp++;

            if (temp > longest) {
                longest = temp;
            }
        } else {
            temp = 1;
        }
    }

    return longest;
};