/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    const visited = new Set();
    let cnt = 0;
    
    const dfs = (x, y) => {
        const k = `${x},${y}`;
        if (visited.has(k)) return;
        
        visited.add(k);
        for (const stone of stones) {
            if (stone[0] == x || stone[1] == y) {
                dfs(stone[0], stone[1]);
            }
        }
        
    }
    
    for (const stone of stones) {
        const k = `${stone[0]},${stone[1]}`;
        if (visited.has(k)) continue;
        dfs(stone[0], stone[1]);
        cnt++;
        // console.log(visited);
    }
    return stones.length - cnt;
};