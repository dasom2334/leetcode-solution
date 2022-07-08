/**
 * @param {number[]} houses
 * @param {number[][]} cost
 * @param {number} m
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
var minCost = function(houses, cost, m, n, target) {
    let dp = new Array(m+1).fill(null).map(e => new Array(n+1).fill(null).map(e1 => new Array(target+1).fill(0)));
        for (let k = 1; k <= target; k++) {
    for (let i = 1; i <= m; i++) {

        for (let j = 1; j <= n; j++) {
                if (i < k || houses[i-1] !== 0 && (j !== houses[i-1] || false) ) {
                    dp[i][j][k] = -1;
                    continue;
                }
                let before = [];
                if (k !== 1) {
                    before = dp[i-1].filter((e, i) => ![0, j].includes(i)).map(e => e[k-1]).filter(e => e !== -1);
                }
                if ((dp[i-1][j][k]) !== -1) before.push(dp[i-1][j][k]);
                // console.log(before);
                if (before.length > 0) {
                    dp[i][j][k] = Math.min(...before);
                    if (houses[i-1] == 0) dp[i][j][k] += cost[i-1][j-1];
                } else {
                    dp[i][j][k] = -1;
                }
            }
        }

        // console.log(dp);
    }
    const results = dp[dp.length-1].map(e => e[target]).filter((e, i) => i !== 0 && e !== -1);
    const result = Math.min(...results);
    return results.length > 0 ? Math.min(...results): -1;
};