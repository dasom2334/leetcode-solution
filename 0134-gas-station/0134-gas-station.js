/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if (gas.length === 1) {
        return (gas[0] >= cost[0]) ? 0 : -1
    }
    const start = gas.map((e, i) => e - cost[i])
    const used = gas.map((e, i) => cost.at(i - 1));
    
    const test = new Array(gas.length).fill(0).map((e, i) => i).filter(e => gas[e] - cost[e] > 0).sort((a, b) => cost.at(b - 1) - cost.at(a - 1))
    for (let idx = 0; idx < test.length; idx++) {
        let isComplete = true
        const i = test[idx];
        let cur = gas[i];
        for (let j = i; j < gas.length + i; j++) {
            const ci = (gas.length <= j)?j - gas.length:j;
            const ci2 = (gas.length <= j + 1)?j + 1 - gas.length:j + 1;
            cur -= cost[ci]
            if (cur < 0) {
                isComplete = false;
                break;
            }
            cur += gas[ci2]
        }
        if (isComplete) return i;
    }
    return -1;
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