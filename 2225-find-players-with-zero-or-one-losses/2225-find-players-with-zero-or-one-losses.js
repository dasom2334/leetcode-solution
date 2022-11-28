/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const dict = {};
    
    for (const match of matches) {
        const [w, l] = match;
        if (!(w in dict)) {
            dict[w] = 1;
        } else {
            
        }
        if (l in dict) {
            dict[l] = dict[l] - 1;
        } else {
            dict[l] = 0;
        }
    }
    const result = [[], []];
    for (const k in dict) {
        if (dict[k] == 0) {
            result[1].push(k);
        } else if (dict[k] == 1) {
            result[0].push(k);
            
        } 
        
    }
    
    
    return result;
};