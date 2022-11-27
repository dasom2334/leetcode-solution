/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlicesObject = function(nums) {
    let result = 0;
    const dp = new Array(nums.length).fill(null).map(e => new Object());

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            const rs = (diff in dp[j])?dp[j][diff]:0;
            dp[i][diff] = ((diff in dp[i])? dp[i][diff]:0) + rs + 1
            result += rs;
        }
    }
    return result;
};
var numberOfArithmeticSlices = function(nums) {
    let result = 0;
    const dp = new Array(nums.length).fill(null).map(e => new Map());

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];
            const rs = (dp[j].has(diff))?dp[j].get(diff):0;
            dp[i].set(diff, (dp[i].has(diff)?dp[i].get(diff):0) + rs + 1)
            result += rs;
        }
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