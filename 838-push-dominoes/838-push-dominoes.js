/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let arr = [...dominoes];
    let li = -1;
    let ld = 'L';
    let ri = li;
    let rd = ld;
    // let [li, ld] ;= [-1, 'L'];
    // let [ri, rd] = [li, ld];
    

    const toPoint = (li, ld, ri, rd, arr) => {
        let count = ri - li - 1;
        if (ld == 'L') {
            if (rd == 'R') return;
            while (count > 0) {
                arr[ri - count] = 'L';
                count--;
            }
        } else {
            if (rd == 'L') count = Math.floor(count/2);
            for (let i = count; i > 0; i--) {
                arr[li + i] = ld;
            }
            if (rd == 'R') return;
            for (let i = count; i > 0; i--) {
                arr[ri - i] = rd;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (dominoes[i] == '.') continue;
        li = ri;
        ld = rd;
        ri = i;
        rd = arr[i];
        // [li, ld] = [ri, rd];
        // [ri, rd] = [i, arr[i]];
        toPoint(li, ld, ri, rd, arr);
    }
    
    li = ri;
    ld = rd;
    ri = arr.length;
    rd = 'R';
    // [li, ld] = [ri, rd];
    // [ri, rd] = [arr.length, 'R'];
    toPoint(li, ld, ri, rd, arr);
    return arr.join('');
};