/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function(s, words) {
    let result = 0;
    for (const word of words) {
        let si = s.indexOf(word[0]);
        let wi = 1;
        while (si !== -1 && wi < word.length) {
            si = s.indexOf(word[wi], si + 1);
            wi++;

        }
        if (si !== -1) {
            result++;
        }
    }
    
    
    
    return result;
};