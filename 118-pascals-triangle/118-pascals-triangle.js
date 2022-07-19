/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = new Array(numRows).fill(null).map(e => new Array(1).fill(1));
    let count = 2;
    for(let i = 1; i < numRows; i++) {
        for(let j = 1; j < count  - 1; j++) {
            result[i].push(result[i-1][j-1] + result[i-1][j]);
        }
        result[i].push(1);
        count++;
    }
    return result;
};