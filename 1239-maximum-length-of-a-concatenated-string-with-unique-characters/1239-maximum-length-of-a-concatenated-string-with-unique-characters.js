/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const dfs = (idx = 0, str = "") => {
        // console.log(idx, str, str.length, new Set([...str]).size);
        if (str.length > 26 || str.length != new Set([...str]).size) return 0;
        if (idx >= arr.length) return str.length;   
        
        let max = dfs(idx + 1, str);
        for (let i = idx; i < arr.length; i++) {
            max = Math.max(dfs(i + 1, str + arr[i]), max);
        }
        return max;        
    }
    return dfs();
};