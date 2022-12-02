/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    const word1Dict = {};
    const word2Dict = {};
    
    [...word1].forEach(e => {
        if (e in word1Dict) {
            word1Dict[e] += 1;
        } else {
            word1Dict[e] = 1;
        }
    });
    
    [...word2].forEach(e => {
        if (e in word2Dict) {
            word2Dict[e] += 1;
        } else {
            word2Dict[e] = 1;
        }
    });
    
    const word1Counts = Object.values(word1Dict).sort();
    const word2Counts = Object.values(word2Dict).sort();
    const word1Keys = Object.keys(word1Dict).sort();
    const word2Keys = Object.keys(word2Dict).sort();
    if (word1Keys.length !== word2Keys.length) return false;
    // console.log(word1Counts, word2Counts)
    for (let i = 0; i < word1.length; i++) {
        if (word1Counts[i] !== word2Counts[i]) return false;
        if (word1Keys[i] !== word2Keys[i]) return false;
    }
    
    
    return true;
};