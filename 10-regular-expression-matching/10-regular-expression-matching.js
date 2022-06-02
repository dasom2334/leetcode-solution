/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let result = true;
    
    
    let pc = p.split('');
    let current = pc.shift();
    let i = p.length + 1;
    
    let dp = new Array(s.length + 1).fill(null).map(e => new Array(p.length + 1).fill(0));
    dp[0][0] = 1;
    
    for (let i0 = 1; i0 <= dp[0].length; i0++) {
        if (p[i0-1] == '*') {
            dp[0][i0] = dp[0][i0-2]
        };
    }
    // if (p[1] == '*') dp[0][2] = 1;
    
    // console.log(dp[0])
    for (let i1 = 1; i1 <= s.length; i1++) {
        for (let i2 = 1; i2 <= p.length; i2++) {
        // for (const i2 in dp[i1]) {
            if ([s[i1-1], '.'].includes(p[i2-1])) {
                dp[i1][i2] = dp[i1-1][i2-1];
            } else if ('*' == p[i2-1] && ((dp[i1-1][i2] == 1 && [s[i1-1], '.'].includes(p[i2-2])) || dp[i1][i2-2] == 1)) {
                dp[i1][i2] = 1;
            }
            // console.log([s[i1-1], '.'].includes(p[i2-1]), dp[i1-1][i2] == 1, ('*' == p[i2-1] && dp[i1][i2-2] == 1));
            // console.log(s[i1-1], p[i2-1], dp[i1])
        }
    }
    // console.log(dp);
    // console.log(dp[s.length][p.length]?true:false);
    return dp[s.length][p.length]?true:false;
};