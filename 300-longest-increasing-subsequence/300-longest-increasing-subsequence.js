/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const onis = nums.map((e, i) => i).sort((a, b) => nums[a] - nums[b]);
    let dp = new Array(nums.length).fill(0);
    
    // console.log(dp);
    for (let i = 0; i < nums.length; i++) {
        const index = onis[i];
        let max = 0;
        for (let j = 0; j < index; j++) {
            if (nums[j] !== nums[index]) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[index] = max + 1;
    }
    
    
    return Math.max(...dp);
};