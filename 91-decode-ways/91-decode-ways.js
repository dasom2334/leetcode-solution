/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s[0] == 0) return 0;
    
    let result = 1;
    let l1 = 1;
    let l2 = 0;
    let t1 = 0;
    let t2 = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] == 0) {
            if (s[i-1] > 2 || s[i-1] == 0) return 0;
            l2 = l1;
            l1 = 0;
        } else {
            t1 = l1;
            t2 = l2;
            l1 += t2;
            if ((s[i - 1] == 2 && s[i] <= 6) || s[i - 1] == 1) {
                l2 = t1;
            } else {
                l2 = 0;
            }
        }
    }
    
    return l1 + l2;
};
