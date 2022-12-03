/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map();
    const sArr = [...s];
    
    sArr.forEach(e => map.set(e, (map.has(e) ?map.get(e):0) + 1));
    const result = [...new Set(sArr)].sort((a, b) => map.get(b) - map.get(a)).map(e => e.repeat(map.get(e)));
    
    
    return result.join('');
};