/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function(matchsticks) {
    
    const om = matchsticks.sort((a, b) => b - a);
    const s = om.reduce((p, c) => p + c, 0) / 4;
    if (s !== ~~s || om[0] > s) {
        return false;
    }
    let sums = new Array(4).fill(0);
    const dfs = (omi) => {
        if (omi == om.length - 1) {
            const result = sums[0] == sums[1] && sums[2] == s && sums[1] == sums[2];
            // console.log(result, sums);
            return result;
        }
        
        for(let i = 0; i < sums.length; i++) { 
            if (sums[i] + om[omi] <= s) {
                sums[i] += om[omi];
                if (dfs(omi + 1)) {
                    return true;
                };
                sums[i] -= om[omi]; 
            }
        }
        return false;
    }
    return dfs(0);
};