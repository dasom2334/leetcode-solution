/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    if (points.length === 1) return 1;
    let result = 0;
    
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            const inc = (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
            map.set(inc, (map.get(inc) || 0) + 1);
        }
        result = Math.max(result - 1, ...Array.from(map.values())) + 1
    }
    return result
};