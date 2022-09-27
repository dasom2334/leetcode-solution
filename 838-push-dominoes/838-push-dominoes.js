/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
    let arr = new Array(dominoes.length).fill(0);
    let force = 0;
    for (let i = 0; i < arr.length; i++) {
        if (dominoes[i] == 'R') {
            force = arr.length;
        } else if (dominoes[i] == 'L') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        arr[i] = force;
    }
    force = 0;
    // console.log(arr);
    for (let i = arr.length -1; i >= 0; i--) {
        if (dominoes[i] == 'L') {
            force = arr.length;
        } else if (dominoes[i] == 'R') {
            force = 0;
        } else {
            force = Math.max(force - 1, 0);
        }
        arr[i] -= force;
    }
    // console.log(arr);
    return arr.map(e => (e > 0)?'R':((e < 0)? 'L': '.')).join('');
};
var pushDominoes1 = function(dominoes) {
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
    return arr.join('');
};