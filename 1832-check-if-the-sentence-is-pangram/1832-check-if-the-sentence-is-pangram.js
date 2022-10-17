/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const map = new Map();
    
    for (const s of sentence) {
        map.set(s, 1);
    }
    
    for (const a of 'abcdefghijklmnopqrsuvwxyz') {
        if (!map.has(a)) {
            return false;
        }
    }
    
    return true;
};