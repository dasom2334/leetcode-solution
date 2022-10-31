/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    for (let i = 0; i < matrix[0].length; i++) {
        const n = matrix[0][i];
        let j = 1;
        while (j < matrix.length && i+j < matrix[0].length) {
            
            // console.log(n, matrix[j][i+j], j, i+j);
            if (n !== matrix[j][i+j]) return false;
            j++;
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        const n = matrix[i][0];
        let j = 1;
        while (i+j < matrix.length && j < matrix[0].length) {
            // console.log(n, matrix[i+j][j], i+j, j, '?');
            if (n !== matrix[i+j][j]) return false;
            j++;
        }
    }
    
    return true;
};