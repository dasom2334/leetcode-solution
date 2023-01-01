/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let result = 0;
    const m = grid.length;
    const n = grid[0].length;
    
    let x = 0;
    let y = 0;
    let countZero = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                countZero++;
            } else if (grid[i][j] === 1) {
                x = i;
                y = j;
            }
        }
    }
    
    const dfs = (x, y, step = 0) => {
        if (x < 0 || y < 0 || x >= m || y >= n) {
            return;
        }
        if (grid[x][y] === 2) {
            if (countZero === step) {
                result++;
            }
            return; 
        }
        if (grid[x][y] !== 0) {
            return;
        }  
        const before = grid[x][y];
        grid[x][y] = -1;
        
        dfs(x+1, y, step+1);
        dfs(x-1, y, step+1);
        dfs(x, y+1, step+1);
        dfs(x, y-1, step+1);
        
        grid[x][y] = before;
        
    }
    dfs(x-1, y);
    dfs(x+1, y);
    dfs(x, y-1);
    dfs(x, y+1);
    return result;
};