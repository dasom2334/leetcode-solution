/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    const dfs = (idx = 0, str = "") => {
        // console.log(idx, str)
        if (idx >= arr.length) return str.length;
        let max = 0;
        for (let i = idx; i < arr.length; i++) {
            const nstr = str + arr[i];
            const set = new Set([...nstr]);
            if (nstr.length > 26 || nstr.length != set.size) {
                max = Math.max(dfs(i + 1, str), max);
            } else {
                max = Math.max(dfs(i + 1, nstr), max);
            }
        }
        return max;        
    }
    return dfs();
};