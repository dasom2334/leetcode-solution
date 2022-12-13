/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[i][j] = Math.min(
                matrix[i+1][j-1] || Infinity,
                matrix[i+1][j],
                matrix[i+1][j+1] || Infinity
            )
        }
    }
    return Math.min(...matrix.at(-1))
    
};
var minFallingPathSum = function(matrix) {
    const dp = new Array(matrix.length).fill(0).map(e => new Array(matrix.length).fill(Infinity));
    
    const dfs = (i, j, s) => {
        if (i >= matrix.length || j < 0 || j >= matrix[0].length) return;
        
        const sum = s + matrix[i][j];
        if (dp[i][j] <= sum) {
            return;
        } else {
            dp[i][j] = sum;
        }
        
        dfs(i+1, j-1, sum);
        dfs(i+1, j, sum);
        dfs(i+1, j+1, sum);
        
    }
    
    for (let j = 0; j < matrix.length; j++) {
        dfs(0, j, 0);
    }
    // console.log(dp)
    
    return Math.min(...dp.at(-1))
    
};