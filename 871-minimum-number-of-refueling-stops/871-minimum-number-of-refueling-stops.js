/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    let dict = {
        0:startFuel
    };
    
    let before = 0;
    for (let i = 0; i < stations.length; i++) {
        const station = stations[i];
        const steps = before - station[0]
        // for (const output in dict) {
        // }
        for (const output of Object.keys(dict).reverse()) {
            dict[output] += steps;
            if (dict[output] < 0) {
                delete dict[output];
                continue;
            }
            const next = parseInt(output) + 1;
            if (!dict[next] || dict[next] < dict[output] + station[1]) {
                dict[next] = dict[output] + station[1];
            }
            // console.log(dict);
        }
        
        
        before = station[0];
        // console.log(dict, steps);
    }
    
    const steps = before - target;
    
    // console.log(dict, steps);
    for (const output in dict) {
        dict[output] += steps;
        if (dict[output] >= 0) return output; 
    }
    
    
    return -1;
    
};