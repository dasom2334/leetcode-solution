/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function(words) {
    const ows = words.sort((a, b) => b.length - a.length);
    let pushed = [];
    let result = 0;
    
    for (const word of ows) {
        let isMatched = false;
        for (const p of pushed) {
            // console.log(p.slice(p.length - word.length), word);
            if (p.slice(p.length - word.length) == word) {
                isMatched = true;
                break;
            }
        }
        if (!isMatched) {
            pushed.push(word);
            result += word.length + 1;
        }
    }
    // console.log(ows);
    // console.log(pushed);
    
    
    return result;
};