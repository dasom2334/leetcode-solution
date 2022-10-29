/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    let result = 0;
    let time = 0;
    
    const idx = plantTime.map((e, i) => i).sort((a, b) => growTime[b] - growTime[a]);
    
    for (const i of idx) {
        time += plantTime[i];
        result = Math.max(result, time + growTime[i]);
    }
    
    
    return result;
    
};

