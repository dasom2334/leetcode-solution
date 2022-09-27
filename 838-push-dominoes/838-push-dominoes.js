/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let arr = [...dominoes];
    let li = -1;
    let ri = li;
    for (let i = 0; i < arr.length; i++) {
        if (dominoes[i] == '.') continue;
        li = ri;
        ri = i;
        let count = ri - li - 1;
        if (arr[li] != 'R') {
            if (arr[ri] == 'R') continue;
            while (count > 0) {
                arr[ri - count] = 'L';
                count--;
            }
        } else {
            if (arr[ri] == 'L') count = Math.floor(count/2);
            for (let i = count; i > 0; i--) {
                arr[li + i] = arr[li];
            }
            if (arr[ri] == 'R') continue;
            for (let i = count; i > 0; i--) {
                arr[ri - i] = arr[ri];
            }
        }
    }
    
    if (arr[ri] == 'R') {
        ri++;
        while (ri < arr.length) {
            arr[ri] = 'R';
            ri++;
        }
    } 
    // [li, ld] = [ri, rd];
    // [ri, rd] = [arr.length, 'R'];
    // toPoint(li, ld, ri, rd, arr);
    return arr.join('');
};