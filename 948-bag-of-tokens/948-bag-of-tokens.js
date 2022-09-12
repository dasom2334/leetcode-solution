/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    if (tokens.length == 0) return 0;
    if (tokens.length == 1) return (tokens[0] < power)?1:0;
    let result = 0;
    const ts = tokens.sort((a, b) => a - b);
    let s = 0;
    let p = power;
    
    let i = 0;
    let j = tokens.length - 1;
    while (i <= j) {
        while (i < j && p < ts[i] && s > 0) {
            p += ts[j];
            s--;
            j--;
        }
        if (p < ts[i]) break;
        p -= ts[i];
        s++;        
        i++;
        result = Math.max(s, result);
    }
    
    return result;
};