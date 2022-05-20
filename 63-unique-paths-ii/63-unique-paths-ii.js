/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const star = [obstacleGrid.length - 1, obstacleGrid[0].length - 1];
    let result = 0;
    let toVisit = [[0, 0]];
    let visited = new Array(star[0]+1).fill(null).map(e => new Array(star[1]+1).fill(0));
    let visited2 = [];
    if (obstacleGrid[0][0] == 0) visited[0][0] = 1;
    while(toVisit.length > 0) {
        const current = toVisit.shift();
        const cstr = current.join();
        if (obstacleGrid[current[0]][current[1]] == 0 && !visited2.includes(cstr)) {
            visited2.push(cstr);
            const wa = [
                [current[0]-1, current[1]],
                [current[0], current[1]-1],
            ].filter(e => e[0] >= 0 && e[1] >= 0 && e[0] <= star[0] && e[1] <= star[1]);
            visited[current[0]][current[1]] += wa.map(e => visited[e[0]][e[1]]).reduce((p, c) => p + c, 0);
            
            const sd = [
                [current[0]+1, current[1]],
                [current[0], current[1]+1],
            ];
            
            toVisit = [...toVisit, ...sd.filter(e => e[0] >= 0 && e[1] >= 0 && e[0] <= star[0] && e[1] <= star[1])];
        }
    }
    return visited[star[0]][star[1]];
};