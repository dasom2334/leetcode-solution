/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let result = new Array(matrix[0].length).fill(null).map(e => new Array(matrix.length));
    
    for (const i1 in matrix) {
        for (const i2 in matrix[i1]) {
            result[i2][i1] = matrix[i1][i2];
        }
    }
    return result;
};