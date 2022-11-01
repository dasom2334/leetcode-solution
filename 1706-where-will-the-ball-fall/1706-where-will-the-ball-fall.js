/**
 * @param {number[][]} grid
 * @return {number[]}
 */

var findBall = function(grid) {
    const result = new Array(grid[0].length).fill(-1);
    for (let b = 0; b < grid[0].length; b++) {
        let curC = b;
        let r = 0;
        for (; r < grid.length; r++) {
            let nextC = curC + grid[r][curC];
            if (grid[r][curC] !== grid[r][nextC]) {
                break;
            }
            
            curC = nextC;
        }
        
        
        if (r == grid.length) result[b] = curC;
    }
    
    return result;
}
var findBall2 = function(grid) {
    const result = new Array(grid[0].length).fill(-1);
    
    for (let b= 0; b < grid[0].length; b++) {
        let c = b;
        let r = 0;
        for (; r < grid.length; r++) {
            let path = c + grid[r][c];
            if (grid[r][path] !== grid[r][c]) {
                break;
            }
            c = path;
            
        }
        if (r == grid.length) result[b] = c;
    }
    
    return result;
};