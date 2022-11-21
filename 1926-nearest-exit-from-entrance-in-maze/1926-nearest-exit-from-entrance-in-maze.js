/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    const toVisit = [[...entrance, 0]];
    // let 
    while (toVisit.length > 0) {
        const [x, y, count] = toVisit.shift();
        if (x === maze.length || x === -1 || y === maze[0].length || y === -1) {
            if (count > 1) return count - 1;    
            else continue;
        } else if (maze[x][y] == "+") continue;
        // console.log(x, y, count);
        maze[x][y] = "+";
        toVisit.push([x + 1, y, count + 1], [x - 1, y, count + 1], [x, y + 1, count + 1], [x, y - 1, count + 1]);
    }
    
    return -1;
};