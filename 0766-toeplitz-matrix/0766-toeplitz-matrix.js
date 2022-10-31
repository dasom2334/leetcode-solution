/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    
    for (let i = 0; i < matrix.length - 1; i++) {
        const matched = matrix[i].slice(0, matrix[0].length - 1).filter((e, j) => matrix[i+1][j+1] == e);
        if (matched.length < matrix[0].length -1) return false;
    }
    
    return true;
};