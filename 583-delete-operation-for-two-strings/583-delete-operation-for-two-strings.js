/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    
    let dp = new Array(word1.length + 1).fill(null).map(e => new Array(word2.length + 1).fill(0));
    // console.log(dp);
    for (let i = 1; i < word1.length + 1; i++) {
        for (let j = 1; j < word2.length + 1; j++) {
            if (word1[i-1] === word2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    const lcsLength = dp[word1.length][word2.length];
    
    const result = word1.length + word2.length - lcsLength*2;
    // console.log(word1.length, word2.length, lcsLength);
    return result;
};