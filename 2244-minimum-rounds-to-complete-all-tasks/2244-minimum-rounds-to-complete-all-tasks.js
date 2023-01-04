/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const map = new Map()
    for (const t of tasks) {
        map.set(t, (map.get(t) || 0) + 1)
    }
    
    let result = 0
    for (const [k, v] of map) {
        if (v === 1) return -1
        result += Math.ceil(v/3)
    }
    
    return result;
};