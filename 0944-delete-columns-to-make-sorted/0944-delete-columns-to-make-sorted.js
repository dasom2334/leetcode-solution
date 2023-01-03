/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) { 
    const splits = strs.map(e => e.split(''));
    const arranged = new Array(strs[0].length).fill(0).map((elem, idx) => splits.map((e) => e[idx]))
    return arranged.filter(e => e.join('') !== e.sort().join('')).length
};