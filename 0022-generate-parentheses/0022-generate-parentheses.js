/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    
    const dfs = (str, l, r) => {
        if (str.length >= n*2) {
            result.push(str);
            return;
        }
        
        if (l < n) {
            str += "(";
            dfs(str, l + 1, r);
            str = str.slice(0, str.length - 1);
        }
        if (r < l) {
            str += ")";
            dfs(str, l, r + 1);
            str =str.slice(0, str.length - 1);
        }
    };
    dfs("", 0, 0);
    return result;
};