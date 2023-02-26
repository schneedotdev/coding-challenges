/**
 * Name: Group Anagrams
 * Description: Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * Link: https://leetcode.com/problems/group-anagrams/
 */

function groupAnagrams(strs: string[]): string[][] {
  const map = {};
  const result: string[][] = [];

  for (const str of strs) {
    const sortedStr = str
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");

    if (!map.hasOwnProperty(sortedStr)) {
      result.push([]);
      map[sortedStr] = result.length - 1;
    }

    result[map[sortedStr]].push(str);
  }

  return result;
}
