/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morses = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const p = 'a'.charCodeAt(0);
    let map = new Map();
    let result = 0;
    
    for(const word of words) {
        let string = '';
        for(let i = 0; i < word.length; i++) {
            string += morses[word.charCodeAt(i) - p];
        }
        if (!map.get(string)) {
            result++;
            map.set(string, true);
        }
            
    }
    return result;
};