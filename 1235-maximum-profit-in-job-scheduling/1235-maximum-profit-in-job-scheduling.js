/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const length = startTime.length;
    const idxs = new Array(length).fill(0).map((e, i) => i);
    idxs.sort((a, b) => endTime[a] - endTime[b]);
    const dp = new Array(length).fill(0);
    dp[0] = profit[idxs[0]];
    
    for (let i = 1; i < length; i++) {
        let idx = -1;
        for (let j = i-1; j >= 0; j--) {
            if (endTime[idxs[j]] <= startTime[idxs[i]]) {
                idx = j;
                break;
            }
        }
        dp[i] = Math.max(dp[i-1], profit[idxs[i]] + (dp[idx] ?? 0));
    }
    
    return dp.at(-1);
};