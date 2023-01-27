//+ Jonas Raoni Soares Silva
//@ http://raoni.org

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices.at(-1) ?? 0, max = min, profit = 0;
    for (let i = prices.length; i--; max = Math.max(prices[i], max), profit = Math.max(max - prices[i], profit));
    return profit;
};