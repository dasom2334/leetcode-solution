/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = new Map();
    
    for (const w of words) {
        if (!map.has(w)) map.set(w, 0);
        map.set(w, map.get(w) + 1);
    }
    
    const result = [...map.keys()].sort((a, b) => map.get(b) - map.get(a) || a.localeCompare(b)).slice(0, k);
    
    return result;    
};