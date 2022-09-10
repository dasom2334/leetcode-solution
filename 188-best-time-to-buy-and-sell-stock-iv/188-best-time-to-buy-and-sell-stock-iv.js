/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length == 0) return 0;
    let dp = new Array(prices.length).fill(0);
    
    for (let i = 0; i < k; i++) {
        let max = 0;
        for (let j = 1; j < prices.length; j++) {
            max = Math.max(dp[j], max + prices[j] - prices[j-1]);
            dp[j] = Math.max(dp[j-1], max);
        }
    }
    // console.log(dp);
    
    return dp[prices.length-1];
};

    
    
    
