/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.has(num)?map.get(num):0) + 1)
    }
    const map2 = new Map();
    for (const [_, cnt] of map) {
        if(map2.has(cnt)) return false;
        map2.set(cnt, 1);
    }
    
    return true;
};
var uniqueOccurrencesOld = function(arr) {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.has(num)?map.get(num):0) + 1)
    }
    const set = new Set();
    for (const [_, cnt] of map) {
        set.add(cnt);
    }
    
    return map.size === set.size;
};