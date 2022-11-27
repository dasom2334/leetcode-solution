/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    let result = 0;
    const dp = new Array(nums.length).fill(null).map(e => new Object());
    // console.log(dp);

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const diff = (nums[i] - nums[j]).toString();
            // console.log(nums[i], nums[j], diff, i, j, dp[j][diff])
            let rs = 0;
            if (diff in dp[j]) {
                rs = dp[j][diff];   
            }
            if (!(diff in dp[i])) dp[i][diff] = 0;
            dp[i][diff] += rs + 1;  
            result += rs;
        }
        // console.log(i, result, dp)
    }
    return result;
};
var numberOfArithmeticSlicesOld = function(nums) {
    let result = 0;
    
    const dfs = (index, diff) => {
        for (let i = index + 1; i < nums.length; i++ ) {
            if (nums[i] - nums[index] === diff) {
                result += 1;
                dfs(i, diff);
            }
        }
    };
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            dfs(j, nums[j] - nums[i]);
        }
    }
    
    
    return result;
};