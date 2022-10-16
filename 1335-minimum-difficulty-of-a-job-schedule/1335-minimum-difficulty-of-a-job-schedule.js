/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    const len = jobDifficulty.length;
    
    if (len == d) return jobDifficulty.reduce((a, b) => a + b);
    if (len < d) return -1;
    
    const dp = new Array(len+1).fill(null).map(e => new Array(d+1).fill(-1));
    
    const dfs = (cur, day) => {
        if (dp[cur][day] != -1) return dp[cur][day];
        if (day == 0) {
            dp[cur][day] = (cur >= len) ? 0 : Math.max(...jobDifficulty.slice(cur));
            return dp[cur][day];
        }
        let min = Infinity;
        let max = 0;
        for (let i = cur; i <= len - day; i++) {
            max = Math.max(max, jobDifficulty[i]);
            min = Math.min(dfs(i + 1, day - 1) + max, min);
        }
        dp[cur][day] = min;
        return min;
    }
    
    // console.log(dp);
    
    return dfs(0, d);
};