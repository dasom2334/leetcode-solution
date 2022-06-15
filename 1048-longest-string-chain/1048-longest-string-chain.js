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
    
    // const maxs = sortedWords.filter(e => e.length == sortedWords[0].length);
    
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
                const wordArr = word.split('');
                wordArr.splice(i, 1);
                // console.log();
                // console.log(word.split('').splice(i, 1).join(''));
                if (wordArr.join('') == word2) {
                    isChained = true;
                    break;
                }
            }
            if (isChained) {
                lengths[word2] = Math.max(lengths[word] + 1, lengths[word2]);
            }
            // console.log(word.split(word2).join(''));
            // const isChained = word.split(word2).join('').length == 1;
            // console.log(isChained, word, word2);
        }
    }
    
    // console.log(orderedWords);
    // console.log(sortedWords);
    // console.log(lengths);
    return Math.max(...Object.values(lengths));
};