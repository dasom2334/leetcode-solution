/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temp) {
    const result = new Array(temp.length).fill(0)
    
    const stack = []
    
    for (let i = 0; i < temp.length; i++){ 
        while (temp[stack.at(-1)] < temp[i]) {
            const cur = stack.pop();
            result[cur] = i - cur;
        }
        stack.push(i)
        // console.log(result, stack)
    }
    
    return result;
};