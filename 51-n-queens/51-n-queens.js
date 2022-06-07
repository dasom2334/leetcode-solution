/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // console.log("hi".repeat(3))
    let temp1 = 0;
    let temp2 = 0;
    const map = new Array(n*n).fill(null).map((e, i) => {
        if (temp2 >= n) {
            temp1++;
            temp2 = 0;
        }
        return [temp1, temp2++];
    });
    
    let result = map.map(e => dfs(e, map, n, [], [])).filter(e => e.length > 0);

    if (map.length <= 1) {
        result = [[[[0,0]]]];
    } 
    return result.flat().map(e1 => {
        let map = new Array(n).fill(null).map(e => new Array(n).fill("."));
        e1.forEach((e2, i) => {
            map[e2[0]][e2[1]] = "Q";
        });
        return map.map(e => e.join(''));
    });
};

var dfs = function(location = [0, 0], map = [], depth = 0, c = [], cases = []) {
    const currentCase = c.slice();
    currentCase.push(location);

    let currentCases = [...cases];
    const currentMap = map.filter(e => 
                                  e[0] > location[0]
                                  && e[1] != location[1]
                                  && Math.abs(location[0] - e[0]) != Math.abs(location[1] - e[1]));
    if (currentMap.length > 0) {
        if (depth == 2) {
            currentCases = [[...currentCase, currentMap[0]]];
        } else {
            let temp = currentMap
                .map(e => dfs(e, currentMap, depth - 1, currentCase, currentCases))
                            .filter(e => e.length > 0);
            if (temp.length > 0) {
                temp.forEach(e => {
                    currentCases = [...currentCases, ...e];
                })
            }

        }
    }
    return currentCases;
}