/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function(target, startFuel, stations) {
    let f = startFuel;
    let stops = 0;
    let q = [];
    let idx = 0;
    while (f < target) {
        while (idx < stations.length && stations[idx][0] <= f) {
            q.push(stations[idx][1]);
            idx++;
        }
        // console.log(f);
        if (!q.length) return -1;
        q.sort((a, b) => a - b);
        f += q.pop();
        stops ++;
    }
    
    
    
    return stops;
    
};

var minRefuelStops2 = function(target, startFuel, stations) {
    let dict = {
        0:startFuel
    };
    
    let before = 0;
    for (let i = 0; i < stations.length; i++) {
        const station = stations[i];
        const steps = before - station[0]
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
        }
        
        
        before = station[0];
    }
    
    const steps = before - target;
    
    for (const output in dict) {
        dict[output] += steps;
        if (dict[output] >= 0) return output; 
    }
    
    
    return -1;
    
};