/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const sortedWords = words.slice().sort((a, b) => b.length - a.length);
    let orderedWords = {};
    words.forEach(e => {
        if (orderedWords[e.length] != undefined) {
            orderedWords[e.length].push(e)
        } else {
            orderedWords[e.length] = [e];
        }   
    });
    
    
    let lengths = {};
    
    sortedWords.forEach(e => {
        lengths[e] = 1
    });
    
    // sortedWords
    for (const word of sortedWords) {
        if (orderedWords[word.length - 1] == undefined) continue;
        for (const word2 of orderedWords[word.length - 1]) {
            let isChained = false;
            for (let i = 0; i < word.length; i++) {
                const diffString = word.slice(0, i) + word.slice(i + 1);
                if (diffString == word2) {
                    isChained = true;
                    break;
                }
            }
            if (isChained) {
                lengths[word2] = Math.max(lengths[word] + 1, lengths[word2]);
            }
        }
    }
    
    return Math.max(...Object.values(lengths));
};