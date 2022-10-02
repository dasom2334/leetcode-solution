/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
    let dp = [...Array(n+1)].map(() => Array(target+1).fill(0));
    
    function dfs(d, l) {

        if(l < d || l > d * k) return 0;
        if(d === 1) {
            dp[d][l] = l <= k ? 1:0;
            return l <= k;  
        } 
        if (dp[d][l] !== 0) return dp[d][l];

        let ans = 0;

        for (let i = 1; i <= k; ++i) {
            ans += dfs(d - 1, l - i);
        }

        return dp[d][l] = ans % 1000000007;
    }
    let result = dfs(n, target);
    return result;
};

