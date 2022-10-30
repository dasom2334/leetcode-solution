/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const dp = new Array(grid.length).fill(null).map(e => new Array(grid[0].length).fill(null).map(e2 => new Array(2).fill(Infinity)));
    dp[grid.length -1][grid[0].length-1][0] = -1;
    const dfs = (m, n, step, cnt) => {
        if (m == grid.length - 1 && n == grid[0].length - 1) {
            dp[m][n][0] = step;
            dp[m][n][1] = cnt;
            return;
        }
        if (m >= grid.length || n >= grid[0].length || m < 0 || n < 0) return;
        
        if (grid[m][n] == 1) {
            cnt--;
            if (cnt < 0) return;
        }
        if (dp[m][n][0] == step && dp[m][n][1] >= cnt || dp[m][n][0] < step) {
            return;
        } else {
            dp[m][n][0] = step;
            dp[m][n][1] = cnt;
        }
        
        dfs(m - 1, n, step+1, cnt);
        dfs(m, n - 1, step+1, cnt);
        dfs(m + 1, n, step+1, cnt);
        dfs(m, n+1, step+1, cnt);
    }
    dfs(0, 0, 0, k);
    return dp[grid.length -1][grid[0].length-1][0];
};