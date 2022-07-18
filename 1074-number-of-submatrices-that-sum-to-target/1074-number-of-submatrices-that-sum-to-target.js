/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function(matrix, target) {
    let result = 0;
    let sum = 0;
    let dp = new Array(matrix.length).fill(null).map(e => new Array(matrix[0].length).fill(0));
    for(let i = 0; i < matrix.length; i++) {
        sum = 0;
        for(let j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j];
            matrix[i][j] = sum;
        }
    }
    let hash = new Map();
    for (let m = 0; m < matrix[0].length; m++) {
        for (let m2 = m; m2 >= 0; m2--) {
            sum = 0;
            hash.clear();
            hash.set(0, 1);
            for (let n = 0; n < matrix.length; n++) {
                sum += matrix[n][m];
                if(m2 > 0) sum -= matrix[n][m2 - 1];
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
    }
    
    
    return result;
};