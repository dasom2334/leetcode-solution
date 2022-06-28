/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    let hash = {};
    let result = 0;
    
    for (const c of s) {
        if (c in hash) {
            hash[c]++;
        } else {
            hash[c] = 1;
        }
    }
    let entry = Object.entries(hash).map(e => e[1]);
    for (let i = 0; i < entry.length; i++) {
        let isFre = entry.indexOf(entry[i]);
        while(![-1, i].includes(isFre) && entry[i] !== 0) {
            entry[i]--;
            isFre = entry.indexOf(entry[i]);
            result++;
        }
    }
    return result;
};