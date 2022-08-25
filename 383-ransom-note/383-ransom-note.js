/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    
    for (const m of magazine) {
        map.set(m, (map.has(m))? map.get(m) + 1: 1);
    }
    for (const r of ransomNote) {
        let c = map.get(r);
        if (c == undefined || c == 0) return false;
        else map.set(r, c - 1);
    }
    return true;
};