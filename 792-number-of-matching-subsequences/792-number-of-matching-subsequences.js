/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let map = new Map();
    let result = 0;
    const sw = words.sort((a, b) => b.length - a.length);
    for (const word of sw) {
        if (map.get(word)) {
            result++;
        } else {
            // let r = false;
            let si = s.indexOf(word[0]);
            let wi = 1;
            while (si !== -1 && wi < word.length) {
                si = s.indexOf(word[wi], si + 1);
                wi++;
                
            }
            if (si !== -1) {
                for(let i = word.length - 1; i >= 0; i--) {
                    const w = word.slice(0, i);
                    if (map.get(w)) break;
                    map.set(w, 1);   
                }
                result++;
            }
        }
        
    }
    
    
    
    return result;
};