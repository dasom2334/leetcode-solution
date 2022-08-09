/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const m = ((10 ** 9 ) + 7);
    arr.sort((a, b) => a - b);
    let dp = new Array(arr.length).fill(1);
    
    let index = {};
    arr.forEach((e, i) => {
        index[e] = i;
    });
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[i] % arr[j] == 0) {
                const r = arr[i] / arr[j];
                // console.log(arr[i], arr[j], r, index[r]);
                if (index[r] !== undefined) {
                    dp[i] += dp[j] * dp[index[r]];
                    dp[i] %= m;
                    // console.log(dp);
                    
                }
            }
        }
    }
    
    // console.log(dp, index);
    
    return dp.reduce((a, b) => a + b, 0) % m;
};