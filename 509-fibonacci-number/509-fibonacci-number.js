/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let fibs = [0, 1];
    for (let i = 2; i <= n; i++) {
        let now = fibs[i-1] + fibs[i-2];
        fibs.push(now);
    }
    
    return fibs[n];
};