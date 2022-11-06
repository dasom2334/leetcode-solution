/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if (k > 1) {
        return s.split('').sort().join('');
    }
    
    
    const q = s.split('');
    const arr = [s];
    
    for (let i = 0; i < s.length - 1; i++) {
        q.push(q.shift());
        arr.push(q.join(''));
    }
    return arr.sort()[0];
};

