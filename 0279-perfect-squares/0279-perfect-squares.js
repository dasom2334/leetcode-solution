/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const minSqrt = Math.floor(Math.sqrt(n));
    const squares = new Array(minSqrt).fill(0).map((e, i) => (i + 1) ** 2);
    const toVisit = [[0, 0]];
    const visited = new Map();
    
    while (toVisit.length > 0) {
        const [sum, cnt] = toVisit.shift();
        if (sum === n) return cnt;
        if (sum > n || cnt >= 4) continue;
        toVisit.push(...squares.filter(e => {
            if (visited.has(sum + e)) {
                return false;
            } else {
                visited.set(sum+e, 1);
                return true;
            }
        }).map(e => [sum+e, cnt+1]));
    }
    
    return n;
};