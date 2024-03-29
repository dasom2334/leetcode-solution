/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    buildings.sort((a, b) => b[2] - a[2] || a[0] - b[0]);
    const result = [buildings[0]];
    
    const build = ([l, r, h]) => {
        const nowLength = result.length;
        for (let j = 0; j < nowLength; j++) {
            if (r - l <= 0) break;
            if (l > result[j][0]) {
                if (result[j][1] > l) {
                    l = result[j][1];
                }
                continue;
            }
            const newR = r > result[j][0]? result[j][0] : r;
            if (l != newR) result.push([l, newR, h]);
            l = result[j][1]
        }
        result.sort((a, b) => a[0] - b[0]);
        if (r - l > 0) {
            const last = result[result.length - 1]; 
            if (last[1] >= l && h == last[2]) {
                result[result.length - 1][1] = r;
            } else {
                const newL = last[1] > l ? last[1] : l;
                if (newL != r) result.push([newL, r, h]);
            }
        }
    }
    
    
    
    for (let i = 1; i < buildings.length; i++) {
        build(buildings[i]);
    }
    build([result[0][0], result[result.length-1][1], 0]);
    
    result.push([result[result.length-1][1], 0, 0])
    
    return result.map(e => [e[0], e[2]]);
};