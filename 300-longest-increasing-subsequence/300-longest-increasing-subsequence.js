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
        const maxs = dp.slice(0, index).filter((e, i) => nums[i] !== nums[index]);
        // console.log(maxs);
        if (maxs.length == 0) {
            dp[index] = 1;
        } else {
            dp[index] = Math.max(...maxs) + 1;
        }
        // console.log(dp);
    }
    
    
    // console.log(onis);
    // console.log(dp);
    return Math.max(...dp);
};