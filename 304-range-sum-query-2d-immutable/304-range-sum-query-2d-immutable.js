/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.matrix = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let result = 0;
    for (let i1 = row1; i1 <= row2; i1++) {
        for (let i2 = col1; i2 <= col2; i2++) {
            result += this.matrix[i1][i2];
            // console.log(i1, i2);
        }
    }
    return result;
    // const mat = this.matrix.slice(row1, row2+1).map(e => e.slice(col1, col2+1));
    // return mat.reduce((p, c) => [...p, ...c], []).reduce((p, c) => p + c, 0);
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */