/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const map = new Map()
    for (const t of tasks) {
        map.set(t, (map.get(t) || 0) + 1)
    }
    
    const values = [...map].map(e => e[1])
    if (values.includes(1)) return -1
    
    let result = 0
    
    values.forEach(e => result += Math.ceil(e/3))
    
    
    return result;
};