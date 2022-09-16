/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    let dp = [0];
    
    // for (const multiplier of multipliers) {
    for (let i = 0; i < multipliers.length; i++) {
        dp = new Array(dp.length + 1).fill(0).map((e, j) => {
            let left = (j > dp.length - 1)? -Infinity:dp[j] + nums[i-j]*multipliers[i];
            let right = (j < 1)? -Infinity:dp[j-1] + nums[nums.length - j]*multipliers[i];
            // console.log(left, right, i, j, dp[j], nums[nums.length - j], multipliers[i]);
            return Math.max(left, right);
        });
        
        // dp = newDp;
        // console.log(dp);   
    }
    return Math.max(...dp);
};