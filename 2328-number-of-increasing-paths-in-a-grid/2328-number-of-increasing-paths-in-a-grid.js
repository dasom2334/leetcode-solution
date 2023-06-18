/**
 * @param {number[][]} grid
 * @return {number}
 */
var countPaths = function(grid) {
    const x = grid.length;
    const y = grid[0].length;
    const dp = new Array(x).fill(null).map(e => new Array(y).fill(0));
    const modulo = (10 ** 9) + 7
    const dfs = (i = 0, j = 0) => {
        if (dp[i][j] !== 0) {
            return dp[i][j];
        }
        dp[i][j] = 1;
        
        const wasd = [
            [i+1, j],
            [i-1, j],
            [i, j+1],
            [i, j-1],
            ]
            .filter(([a, b]) => {
                return a >= 0 
                && b >= 0
                && a < x 
                && b < y
                && grid[a][b] > grid[i][j]
            });
        wasd.forEach(([a, b]) => {
                dp[i][j] += dfs(a, b) % modulo;
            });
        return dp[i][j];
    }
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            dfs(i, j);
        }
    }
    const rows = dp.map(row => row.reduce((p, c) => p + c, 0));
    return rows.reduce((p, c) => p + c, 0) % modulo;
};