/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let temp1 = 0;
    let temp2 = 0;
    const map = new Array(n*n).fill(null).map((e, i) => {
        if (temp2 >= n) {
            temp1++;
            temp2 = 0;
        }
        return [temp1, temp2++];
    });
    
    const result = map.map(e => dfs(e, map, n, 0));
    
    
    // console.log(map);
    // console.log(result);
    if (result.length == 1) result[0] = 1; 
    return result.reduce((p, c) => p + c, 0);
};

var dfs = function(location = [0, 0], map = [], depth = 0, count = 0) {
    const currentMap = map.filter(e => 
                                  ((e[0] > location[0]) || (e[0] == location[0] && e[1] > location[1]))
                                  && e[0] != location[0] && e[1] != location[1]
                                  && Math.abs(location[0] - e[0]) != Math.abs(location[1] - e[1]));
    // console.log('currentMap:', currentMap, location, depth);
    let currentCount = count;
    if (currentMap.length > 0) {
        if (depth == 2) {
            // console.log(currentCount);
            currentCount++;
        } else {
            currentCount += currentMap
                .map(e => dfs(e, currentMap, depth - 1, currentCount))
                .reduce((p, c) => p + c, 0);
        }
    }
    // console.log(depth == )
    return currentCount;
}