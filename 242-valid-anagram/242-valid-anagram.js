/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let hash = new Map();
    for (let i = 0; i < t.length; i++) {
        const start = hash.get(s[i]) || 0;
        let index = t.indexOf(s[i], start);
        hash.set(s[i], index + 1);
        // console.log(s[i], start, index);
        if (index == -1) return false;
    }
    return true;
};
var isAnagramFirst = function(s, t) {
    const os = s.split('').sort().join();
    const ot = t.split('').sort().join();
    
    return os == ot;
};