/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    const order = matrix.map((e1, i1) => e1.map((e2, i2) => [i1, i2]))
                        .flat()
                        .sort((a, b) => matrix[a[0]][a[1]] - matrix[b[0]][b[1]]);
    
    const xl = matrix[0].length;
    const yl = matrix.length;
    
    let toVisit = [];
    // let visited = [];
    let visited = new Array(yl).fill(null).map(e => new Array(xl).fill(0));
    let result = 1;
    
    // console.log(order);
    for (const i in order) {
        toVisit.push([...order[i], 1, -1]);
        while(toVisit.length > 0) {
            const current = toVisit.pop();
            const cstr = [current[0], current[1], current[2]].join();
            const n = matrix[current[0]][current[1]];
            if (visited[current[0]][current[1]] < current[2] && n > current[3]) {
                visited[current[0]][current[1]] = current[2];
                
                const wasd = [
                    [current[0], current[1]+1, current[2]+1, n],
                    [current[0]-1, current[1], current[2]+1, n],
                    [current[0], current[1]-1, current[2]+1, n],
                    [current[0]+1, current[1], current[2]+1, n],
                ];

                toVisit = [...toVisit, ...wasd.filter(e => e[0] >= 0 && e[0] < yl && e[1] >= 0 && e[1] < xl)];
                result = Math.max(result, current[2])
            }
            //     console.log(toVisit);
            // console.log(visited, current[0], current[1], n, current[2]);
        }
    }
    
    
    return result;
}
// Time Limit Exceeded
var longestIncreasingPathOld = function(matrix) {
    let result = 1;
    
    let x = 0;
    let y = 0;
    const xl = matrix[0].length;
    const yl = matrix.length;
    while (y < yl) {
        for (const x in matrix[y]) {
            // console.log(x, y);
            let toVisit = [[y, parseInt(x), '', -1]];
            // console.log(toVisit);
            let visited = new Array(yl).fill(null).map(e => new Array(xl).fill('null'));
            
            let max = 0;
            // console.log('-----', x, y)
            while (toVisit.length > 0) {
                const current = toVisit.pop();
                const n = matrix[current[0]][current[1]];
                if (n > current[3]) {
                     
                    // if (visited[current[0]][current[1]] 
                    // == current[2].substr(0, visited[current[0]][current[1]].length)) continue;
                    const reg = new RegExp('^'+visited[current[0]][current[1]], 'g');
                    if (current[2].match(reg)) continue;
                    
                    
                    visited[current[0]][current[1]] = current[2];
                    const wasd = [
                        [current[0], current[1]+1, current[2]+'w', n],
                        [current[0]-1, current[1], current[2]+'a', n],
                        [current[0], current[1]-1, current[2]+'s', n],
                        [current[0]+1, current[1], current[2]+'d', n],
                    ]
                                ;
                    toVisit = [...toVisit, 
                               ...wasd.filter(e => e[0] >= 0 && e[0] < yl && e[1] >= 0 && e[1] < xl).sort((a, b) => matrix[a[0]][a[1]] - matrix[b[0]][b[1]])];
                    
                    // console.log(visited[0]);
                    // console.log(visited[1]);
                    // console.log(visited[2]);
                    // console.log()
                    
                    max = Math.max(current[2].length + 1, max);
                }
                
                // console.log(toVisit);
            }
            
            result = Math.max(max, result);            
        }
        // console.log(visited);
        y++;
    }
    return result;
};