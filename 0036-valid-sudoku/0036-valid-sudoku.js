/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rowDict = {};
    const colDict = {};
    const boxDict = {};
    const nine = 9;
    for (let i = 0; i < nine; i++) {
        rowDict[i] = {};
        colDict[i] = {};
        boxDict[i] = {};
    }
    
    
    let boxNum = 0;
    for (let i = 0; i < nine; i++) {
        if (i < 3) boxNum = -1;
        else if (i < 6) boxNum = 2;
        else boxNum = 5;
        for (let j = 0; j < nine; j++) {
            if (j % 3 === 0) boxNum++;
            const num = board[i][j];
            // console.log(i, j, boxNum, num)
            if (num === '.') continue;
            // if (num in rowDict[i]) console.log('row', num, rowDict[i]);
            // if (num in colDict[j]) console.log('col', num, colDict[j]);
            // if (num in boxDict[boxNum]) console.log('box', num, boxDict[boxNum]);
            if (num in rowDict[i]) return false;
            if (num in colDict[j]) return false;
            if (num in boxDict[boxNum]) return false;
            
            rowDict[i][num] = 1;
            colDict[j][num] = 1;
            boxDict[boxNum][num] = 1;
        }
    }
    
    
    return true;
};