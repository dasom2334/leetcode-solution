/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    // let visited = [];
    let tovisit = [];
    let result = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            // if (grid[i][j] == 0 || visited.includes(i+','+j)) continue;
            if (grid[i][j] == 0) continue;
            tovisit.push([i, j]);
            let isCounting = false;
            while(tovisit.length > 0) {
                const c = tovisit.pop();
                if (grid[c[0]][c[1]] == 1) {
                // if (grid[c[0]][c[1]] == 1 && !visited.includes(c[0]+','+c[1])) {
                    grid[c[0]][c[1]] = 0;
                    // visited.push(c[0]+','+c[1]);  
                    
                    
                    isCounting = true;
                    if (c[0]-1 >= 0) {
                        tovisit.push([c[0]-1, c[1]]);
                    }
                    if (c[1]-1 >= 0) {
                        tovisit.push([c[0], c[1]-1]);
                    }
                    if (c[0]+1 < grid.length) {
                        tovisit.push([c[0]+1, c[1]]);
                    }
                    if (c[1]+1 < grid[0].length) {
                        tovisit.push([c[0], c[1]+1]);
                    }
                  
                }
            }       
            if (isCounting) {
                // console.log(visited)
                result++;
            }
        }
    }
    
    return result;
};