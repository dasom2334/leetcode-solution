/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const map = new Map()
    p.split('').forEach(e => map.set(e, (map.get(e) || 0) + 1))
    s.slice(0, p.length).split('').forEach(e => {
        if (map.has(e)) map.set(e, map.get(e) - 1)
    })
    
    const result = []
    
    for (let i = p.length; i < s.length; i++) {
        if (isAllZero(map.values())) result.push(i - p.length)
        const r = s[i - p.length]
        if (map.has(r)) map.set(r, map.get(r) + 1)
        if (map.has(s[i])) map.set(s[i], map.get(s[i]) - 1)
    }
    if (isAllZero(map.values())) result.push(s.length - p.length)
    return result
};

function isAllZero(iter) {
    for (const e of iter) {
        if (e !== 0) return false
    }
    return true
}