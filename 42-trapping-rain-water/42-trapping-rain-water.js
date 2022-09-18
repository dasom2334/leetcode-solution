/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let stack = [0];
    let bars = height.slice();
    while (bars.length > 1){
        for (const h of bars) {
            if (stack[0] <= h) {
                let water = stack[0] * (stack.length - 1);
                while(stack.length > 1) {
                    water -= stack.pop();
                }
                result += water;
                stack[0] = h;
            } else {
                stack.push(h);
            }
        }
        bars = stack.reverse();
        stack = [0];
    }
    
    return result;
};