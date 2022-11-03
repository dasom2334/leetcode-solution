/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {
    let result = 0;
    let selfs = 0;
    const map = new Map();
    for (const word of words) {
        const reverse = word[1] + word[0];
        const r = map.get(reverse) ?? 0;
        if (r > 0) {
            result += 4;
            if (word[0] == word[1]) selfs--;
            map.set(reverse, r - 1);
        } else {
            
            if (word[0] == word[1]) selfs++;
            map.set(word, (map.get(word) ?? 0) + 1);
        }
        
    }   
    if (selfs > 0) result += 2
    return result;
};