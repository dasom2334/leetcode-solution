/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    let result = 0;
    let dp = new Array(matrix.length).fill(null).map(e => new Array(matrix[0].length).fill(null));
    
    // console.log(dp);
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            dp[i][j] = [matrix[i][j]];
            if (matrix[i][j] === target) {
                result++;
            }
            for(let k = 0; k < j; k++) {
                const last = dp[i][k].length - 1;
                const sum = dp[i][k][last] + matrix[i][j];
                dp[i][k] = [...dp[i][k], sum];
                if (sum === target) {
                    result++;
                }
            }
        }
    }
    // console.log(dp);
    // console.log(result);
    dp = dp.map(e => e.flat());
    
    for (let m = 0; m < dp[0].length; m++) {
        for (let n = 0; n < dp.length; n++) {
            let sum = 0;
            let count = 0;
            for (let l = n; l < dp.length; l++) {
                sum += dp[l][m];
                count++;
                if(sum === target && count !== 1) {
                    result++;
                }   
            }
        }
    }
    // console.log(result);
    // console.log(dp);
    
    
    return result;
};