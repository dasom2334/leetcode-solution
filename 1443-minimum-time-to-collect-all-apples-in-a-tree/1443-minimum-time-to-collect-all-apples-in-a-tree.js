/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    if (n === 1) return 0;
    const map = new Map();
    for (const [a, b] of edges) {
        if (!map.has(a)) map.set(a, []);
        if (!map.has(b)) map.set(b, []);
        map.get(a).push(b);
        map.get(b).push(a);
    }
    
    const dfs = (node, parent) => {
        const childs = map.get(node);
        let nums = 0;
        for (const child of childs) {
            if (child === parent) continue;
            nums += dfs(child, node);
        }
        
        if (parent !== -1 && (nums > 0 || hasApple[node])) nums += 2;
        
        return nums;
    }
    
    const result = dfs(0, -1)
    return result;
};