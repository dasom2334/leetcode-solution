/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
// var closeStrings = function(word1, word2) {
var closeStringsMap = function(word1, word2) {
    if (word1.length !== word2.length) return false;
    
    const word1Map = new Map();
    const word2Map = new Map();
    
    [...word1].forEach(e => {
        word1Map.set(e, (word1Map.has(e)?word1Map.get(e):0) + 1);
    });
    
    [...word2].forEach(e => {
        word2Map.set(e, (word2Map.has(e)?word2Map.get(e):0) + 1);
    });
    for (const c of [...'qwertyuiopasdfghjklzxcvbnm']) {
        if (word1Map.has(c) !== word2Map.has(c)) return false;
    }
    const word1arr = [...word1Map];
    const word2arr = [...word2Map];
    
    if (word1arr.length !== word2arr.length) return false;
    const word1Counts = word1arr.map(e => e[1]).sort();
    const word2Counts = word2arr.map(e => e[1]).sort();
    const word1Keys = word1arr.map(e => e[0]).sort();
    const word2Keys = word2arr.map(e => e[0]).sort();
    for (let i = 0; i < word1arr.length; i++) {
        if (word1Counts[i] !== word2Counts[i]) return false;
        if (word1Keys[i] !== word2Keys[i]) return false;
    }
    
    //hmmm why?
    return true;
};
var closeStrings = function(word1, word2) {
// var closeStringsObject = function(word1, word2) {
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