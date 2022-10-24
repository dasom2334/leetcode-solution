/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let result = 0;
    const dfs = (idx = 0, str = "") => {
        if (str.length > 26 || str.length != new Set([...str]).size) return;
        
        result = Math.max(str.length, result);
        for (let i = idx; i < arr.length; i++) {
            dfs(i + 1, str + arr[i]);
        }
    }
    dfs();
    return result;
};