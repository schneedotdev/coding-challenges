/**
 * Name: 217. Contains Duplicate
 * Description: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * Link: https://leetcode.com/problems/contains-duplicate/
 */

const containsDuplicate = (nums) => {
   return nums.length !== [...new Set(nums)].length
};

module.exports = containsDuplicate;