/**
 * Name: Contains Duplicate
 * Description: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 *
 * Link: https://leetcode.com/problems/contains-duplicate/
 */

function containsDuplicate(nums: number[]): boolean {
  const occured = {};

  for (const num of nums) {
    if (occured.hasOwnProperty(num)) return true;
    occured[num] = num;
  }

  return false;
}
