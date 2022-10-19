/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const dict = {};
    
    for (const w of words) {
        if (!(w in dict)) dict[w] = 0;
        
        dict[w]++;
    }
    
    const result = [...new Set(words)].sort((a, b) => dict[b] - dict[a] || a.localeCompare(b)).slice(0, k);
    
    return result;    
};