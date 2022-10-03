/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let result = 0;
    let temp = neededTime[0];
    
    for (let i = 1; i < colors.length; i++) {
        if (colors[i-1] == colors[i]) {
            if (temp > neededTime[i]) {
                result += neededTime[i];    
            } else {
                result += temp; 
                temp = neededTime[i];
            }
        } else {
            temp = neededTime[i];
        }
        
    }
    
    return result;
};