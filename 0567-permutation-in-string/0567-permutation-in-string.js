/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const map = new Map()
    s1.split('').forEach(e => map.set(e, (map.get(e) || 0) + 1))
    s2.slice(0, s1.length).split('').forEach(e => {
        if (map.has(e)) map.set(e, map.get(e) - 1)
    })
    
    
    for (let i = s1.length; i < s2.length; i++) {
        if ([...map.values()].filter(e => e !== 0).length == 0) return true
        const r = s2[i - s1.length]
        if (map.has(r)) map.set(r, map.get(r) + 1)
        if (map.has(s2[i])) map.set(s2[i], map.get(s2[i]) - 1)
    }
    if ([...map.values()].filter(e => e !== 0).length == 0) return true
    
    
    return false
};