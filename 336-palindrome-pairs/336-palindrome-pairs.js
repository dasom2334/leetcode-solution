/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let result = [];
    let map = new Map();
    words.map(e => e.split('').reverse().join('')).forEach((e, i) => map.set(e, i));
    for (let i = 0; i < words.length; i++) {
        if (words[i] == "") {
            for(let j = 0; j < words.length; j++) {
                if (isPalindrome(words[j]) && words[j] !== "") {
                    result.push([i, j], [j, i]);
                }
            }
            continue;
        }
        if (map.has(words[i]) && map.get(words[i]) !== i) result.push([map.get(words[i]), i]);
        for (let j = 1; j < words[i].length; j++) {
            if (isPalindrome(words[i], 0, j-1)) {
                const ws = words[i].slice(j);
                if (map.has(ws)) {
                    result.push([map.get(ws),i]);
                } 
            }
            if (isPalindrome(words[i], j)) {
                const ws = words[i].slice(0, j);
                if (map.has(ws)) {
                    result.push([i, map.get(ws)]);
                } 
            }
        }
    }
    
    return result;
};
 
function isPalindrome(word, i = 0, j = word.length - 1) {
    while(i < j) {
        if (word[i++] !== word[j--]) return false;
    }
    return true;
}