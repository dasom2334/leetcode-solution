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
            
            result += (temp > neededTime[i])?neededTime[i]:temp;
            temp = Math.max(temp, neededTime[i]);
            
        // console.log(temp, result);
        } else {
            temp = neededTime[i];
        }
        
    }
    
    return result;
};