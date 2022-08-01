/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    
    let dp = new Array(m).fill(0).map(e => new Array(n).fill(0));
    
    dp[0][0] = 1;
    
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if (i - 1 >= 0) dp[i][j] += dp[i-1][j];
            if (j - 1 >= 0) dp[i][j] += dp[i][j-1];
            
        }
    }
    return dp[m-1][n-1];
};
var uniquePathsDfs = function(m, n) {
    
    const dfs = (c) => {
        let count = 0;
        
        if (c[0] + 1 == m && c[1] + 1 == n) {
            count += 1;
        } else if (c[0] < m && c[1] < n) {
            
            count += dfs([c[0]+1, c[1]]);
            count += dfs([c[0], c[1]+1]);
            
        }
        return count;
    }
    return dfs([0,0]);
};
var uniquePathsOld = function(m, n) {
    let toVisit = [[0,0]];
    
    let result = 0;
    while (toVisit.length > 0) {
        const c = toVisit.pop();
        if (c[0] + 1 == m && c[1] + 1 == n) {
            result++;
        } else if(c[0] < m && c[1] < n) {
            toVisit = [...toVisit, [c[0]+1, c[1]], [c[0], c[1]+1]];
        }
        // console.log(toVisit);
    }
    return result;
};