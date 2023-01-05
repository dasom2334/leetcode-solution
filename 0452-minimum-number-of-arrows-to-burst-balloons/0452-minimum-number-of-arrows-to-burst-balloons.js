/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let result = 0;
    let max = -Infinity;
    
    points.sort((a, b) => a[0] - b[0])
    
    for (const [s, e] of points) {
        if (max < s) {
            result += 1;
            max = Infinity;
        }        
        console.log('slow')
        max = Math.min(max, e);
    }
    return result;
};