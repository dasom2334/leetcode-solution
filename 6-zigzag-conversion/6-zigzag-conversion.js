/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    if (numRows == 1) return s;

    let arr = Array.from(new Array(numRows), x => new Array());
    let isDown = (numRows > 1)?true:false;
    let x = 0;
    let y = 0;
    
    for (const c of s) {
        arr[y][x] = c;
        
        if (isDown) {
            y++;
        } else {
            y--;
            x++;
        }
        
        if (y == 0 || y >= numRows - 1) isDown = !isDown
    }
    const result = arr.map(e => e.join('')).join('');
    return result;
};