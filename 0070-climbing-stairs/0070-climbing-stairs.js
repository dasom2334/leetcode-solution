/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const steps = new Map();
    steps.set(1, 1);
    steps.set(2, 2);
    
    for (let i = 3; i <= n; i++) {
        steps.set(i, steps.get(i - 2) + steps.get(i-1));
    }
    
    return steps.get(n);
};
var climbStairsObject = function(n) {
    const steps = {
        1: 1,
        2: 2
    };
    
    for (let i = 3; i <= n; i++) {
        steps[i] = steps[i - 2] + steps[i-1];
    }
    
    return steps[n];
};