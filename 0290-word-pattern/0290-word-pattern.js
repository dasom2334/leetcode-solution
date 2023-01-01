/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const set = new Set();
    const words = s.split(' ');
    if (pattern.length !== words.length) return false;
    for (let i = 0; i < words.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== words[i]) {
                return false;
            }
        } else {
            if(set.has(words[i])) return false;
            set.add(words[i]);
            map.set(pattern[i], words[i]);
            
        }
    }
    return true;
};