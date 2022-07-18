/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    let result = 0;
    let dp = new Array(matrix.length).fill(null).map(e => new Array(matrix[0].length).fill(null));
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            dp[i][j] = [matrix[i][j]];
            for(let k = 0; k < j; k++) {
                const last = dp[i][k].length - 1;
                const sum = dp[i][k][last] + matrix[i][j];
                dp[i][k].push(sum);
            }
        }
    }
    // console.log(dp);
    dp = dp.map(e => e.flat());
    let hash = new Map();
    // console.log(dp);
    for (let m = 0; m < dp[0].length; m++) {
        let sum = 0;
        hash.clear();
        for (let n = 0; n < dp.length; n++) {
            sum += dp[n][m];
            if(sum === target) {
                result++;
            } 
            if(hash.has(sum - target)){
                result += hash.get(sum - target);
            }
            
            if (hash.has(sum)) {
                hash.set(sum, hash.get(sum)+1);
            } else {
                hash.set(sum, 1);
            }
        }
    }
    // console.log(result);
    
    
    return result;
};