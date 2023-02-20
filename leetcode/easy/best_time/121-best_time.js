/**
 * @param {number[]} prices
 * @return {number}
 * Name: Best Time to Buy and Sell Stock
 * Description: You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 * Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
const maxProfit = (prices) => {
   let lowest = prices[0];
   let maxProfit = 0;

   for(let i = 1; i < prices.length; i++) {
      if(prices[i] < lowest) {
         lowest = prices[i]
      }

      const profit = prices[i] - lowest

      if(profit > maxProfit) {
         maxProfit = profit
      }
   }

   return maxProfit
};

module.exports = maxProfit;