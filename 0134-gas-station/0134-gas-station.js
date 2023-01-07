/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const sum = (a, b) => a + b
    const gs = gas.reduce(sum, 0)
    const cs = cost.reduce(sum, 0)
    // console.log(gs, cs)
    if (gs < cs) return -1;
    let cur = 0;
    let idx = 0;
    for (let i = 0; i < gas.length; i++) {
        cur += (gas[i] - cost[i]);
        if (cur < 0) {
            cur = 0;
            idx = i + 1;
        }
    }
    return idx;
};
var canCompleteCircuitTimeLimit = function(gas, cost) {
    // const used = gas.map((e, i) => e - cost[i]);
    // console.log(used)
    for (let i = 0; i < gas.length; i++) {
        let isComplete = true
        let cur = gas[i];
        // console.log(cur, '---')
        for (let j = i; j < gas.length + i; j++) {
            const ci = (gas.length <= j)?j - gas.length:j;
            const ci2 = (gas.length <= j + 1)?j + 1 - gas.length:j + 1;
            cur -= cost[ci]
            if (cur < 0) {
                // console.log(cur)
                isComplete = false;
                break;
            }
            cur += gas[ci2]
            // console.log('-', cost[ci], '+', gas[ci2], cur, ci)
        }
        if (isComplete) return i;
    }
    
    return -1;
};