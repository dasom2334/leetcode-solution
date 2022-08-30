/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let l = matrix.length - 1;
    const half = ~~(matrix.length / 2) //+ (l % 2); 
    // console.log(half)
    // l --;
    for (let i = 0; i < half+ (matrix.length % 2); i++) {
        for (let j = 0; j < half; j++) {
            let t = matrix[i][j];
            // console.log(matrix[i][j], matrix[l - j][i], matrix[l - i][l - j],matrix[j][l - i]);
            matrix[i][j] = matrix[l - j][i];
            matrix[l - j][i] = matrix[l - i][l - j];
            matrix[l - i][l - j] = matrix[j][l - i];
            matrix[j][l - i] = t;
            
        }
    }  
};