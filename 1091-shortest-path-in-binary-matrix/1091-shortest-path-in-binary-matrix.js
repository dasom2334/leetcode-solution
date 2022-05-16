/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let toVisit = [[0, 0, 1]];
    const gl = grid.length;    
    // let min = gl*gl;
    
    let visited = new Array(gl).fill(null).map(e => new Array(gl).fill(gl*gl + 1));
    
    
    let isGoal = false;
    while (toVisit.length > 0) {
        const current = toVisit.shift();
        if (visited[current[0]][current[1]] > current[2]) {
            visited[current[0]][current[1]] = current[2];
            if (grid[current[0]][current[1]] !== 0)
                continue;
            if (current[0] == gl - 1 && current[1] == gl - 1) {
                isGoal = true;
            }
            const visitings = [
                [current[0]-1, current[1]-1, current[2]+1],
                [current[0]-1, current[1], current[2]+1],
                [current[0]-1, current[1]+1, current[2]+1],
                [current[0], current[1]-1, current[2]+1],
                [current[0], current[1]+1, current[2]+1],
                [current[0]+1, current[1]-1, current[2]+1],
                [current[0]+1, current[1], current[2]+1],
                [current[0]+1, current[1]+1, current[2]+1],
            ];
            const filtered = visitings.filter(e => e[0] >= 0 && e[0] < gl && e[1] >= 0 && e[1] < gl && e[2] <= gl*gl);
            toVisit = [...toVisit, ...filtered];
        }
    }
    let result = -1;
    if (isGoal) {
        result = visited[gl-1][gl-1];
    }
    return result;
};