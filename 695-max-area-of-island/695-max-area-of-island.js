/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let visited = [];
    let toVisit = [];
    let max = 0;
    
    const fs = (v, tv) => {
        let count = 0;
        while(tv.length > 0) {
            const c = tv.pop();
            const cs = c.join(',');
            if (!v.includes(cs) && grid[c[0]][c[1]] == 1){
                v.push(cs);
                const toPush = [
                    [c[0]-1, c[1]],
                    [c[0], c[1]-1],
                    [c[0], c[1]+1],
                    [c[0]+1, c[1]]
                ].filter(e => e[0] >= 0 && e[1] >= 0 && e[0] < grid.length && e[1] < grid[0].length);
                
                tv = [...tv, ...toPush];
                count++;
            }
        }
        return count;
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                toVisit.push([i, j]);
                max = Math.max(fs(visited, toVisit), max);
            }
        }
    }
    return max;
};