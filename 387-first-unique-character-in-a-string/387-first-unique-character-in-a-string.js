/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result = -1;
    let map = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i+1) === -1) {
            if (!map.get(s[i])) {
                return i;
            }
        } else {
            map.set(s[i], true);
        }
    }
    
    return result;
};