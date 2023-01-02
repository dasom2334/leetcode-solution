/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const case1 = word.toUpperCase();
    if (case1 === word) return true;
    const case2 = word.toLowerCase();
    if (case2 === word) return true;
    const case3 = word[0] + case2.slice(1);
    if (case3 === word) return true;
    return false;
};