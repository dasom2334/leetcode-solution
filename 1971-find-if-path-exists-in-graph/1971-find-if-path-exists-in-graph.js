/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const map = new Map();
    
    edges.forEach(([a, b]) => {
        if (!map.has(a)) map.set(a, []);
        if (!map.has(b)) map.set(b, []);
        
        map.get(a).push(b);
        map.get(b).push(a);
    })
    
    const visited = new Set();
    
    const dfs = (num) => {
        if (num === destination) return true;
        if (visited.has(num)) return false;
        visited.add(num);
        
        const nexts = map.get(num).map(e => dfs(e))
        
        if (nexts.includes(true)) return true;
        else return false;
    }
    
    
    return dfs(source);
};