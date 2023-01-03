/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) { 
    const splits = strs.map(e => e.split(''));
    const arranged = new Array(strs[0].length).fill(0).map((elem, idx) => splits.map((e) => e[idx]));
    return arranged.filter(e => e.join('') !== e.sort().join('')).length;
};
var minDeletionSizeOld = function(strs) {
    let result = 0;
    for(let i = 0; i < strs[0].length; i++){
         for(let j = 0; j < strs.length - 1; j++){
             if(strs[j][i] > strs[j+1][i]){
                 result++;
                 break;
             }
         }
    }
    return result;
};