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
    // const dp = new Map();
    const result = new Array(grid[0].length).fill(-1);
    
    for (let b= 0; b < grid[0].length; b++) {
        let c = b;
        let r = 0;
        for (; r < grid.length; r++) {
            const key = [r, c].join();
            if (dp.has(key)) {
                break;
            }
            
            dp.set(key, 1);
            let path = c;
            if (grid[r][c] == 1) path++;
            else path--;
            
            if (grid[r][path] !== grid[r][c]) {
                dp.set([r, path].join(), 1);
                break;
            }
            
            c = path;
            
        }
        // console.log(grid.length, r);
        if (r == grid.length) result[b] = c;
    }
    
    return result;
};