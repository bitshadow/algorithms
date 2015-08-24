/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 * Find the maximum profit if you are allowed to buy and sell only once.
 *
 * Ex: [80, 2, 6, 3, 100]
 * output: 92
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    if (prices.length === 1) return 0;

    var i, len = prices.length,
        min = prices[0],
        max = prices[0];

    for (i = 1; i < len; i++) {
        if (prices[i] <= min) {
            min = prices[i];
            max = prices[i];
        } else {
            max = prices[i];
            profit = max - min;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};
