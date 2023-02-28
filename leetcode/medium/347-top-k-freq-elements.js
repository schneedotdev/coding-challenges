/**
 * Name: Top K Frequent Elements
 * Description: Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 */

function topKFrequent(nums, k) {
  const freq = nums.reduce((freq, num) => {
    if(freq.hasOwnProperty(num)) freq[num]++
    else freq[num] = 1
    return freq
  }, {})

  return Object.entries(freq).sort((a, b) => b[1] - a[1]).map(kv => Number(kv[0])).slice(0, k)
}