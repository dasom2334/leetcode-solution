/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const dict = {};
    t.split('').forEach(e => {
        if (!(e in dict)) dict[e] = 0;
        dict[e] += 1;
    })
    
    
    let l = 0;
    let r = -1;
    let count = [...new Set([...t])].length;
    
    
    let min = Infinity;
    let str = "";
    
    while (r < s.length) {
        if (count <= 0) {
            if (s[l] in dict) dict[s[l]]++;
            if(dict[s[l]] > 0) count ++;
            if (min > r - l) {
                min = r - l;
                str = s.slice(l, r+1);   
            }
            l++;
        } else {
            r++;
            if (s[r] in dict) dict[s[r]] -= 1;
            if (dict[s[r]] == 0) count--;
        }
        // console.log(l, r, dict, count);
    }
    
    return str;
};