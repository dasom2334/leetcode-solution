/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const os = s.split('').sort().join();
    const ot = t.split('').sort().join();
    
    return os == ot;
};