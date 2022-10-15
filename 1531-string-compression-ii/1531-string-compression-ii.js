/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    if (s.length == k) return 0;
    
    const dict = {};
    
    const dfs = (cur, count) => {
        if (cur == s.length) return 0;
        const key = [cur, count].join();
        if (key in dict) return dict[key];
        
        let right = count ? dfs(cur+1, count-1):-1;
        let same = 1;
        for (let i = cur + 1; i <= s.length; i++) {
            let temp = dfs(i, count) + 1;
            if (same > 1) temp += same.toString().length;
            
            if (right < 0 || right > temp) right = temp;
            if (s[i] == s[cur]) {
                same++;
            } else {
                if (count == 0) break;
                count--;
            }
        }
        dict[key] = right;
        // console.log(dict);
        return right;
    }
    
    return dfs(0, k);
};