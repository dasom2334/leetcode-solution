/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    let toVisit = [[start, 0]];
    let result = Infinity;
    const map = new Map();
    while (toVisit.length > 0) {
        const [str, cnt] = toVisit.shift();
        if (map.has(str)) {
            continue;
        } else {
            map.set(str, 1);
        }
        if (str == end) {
            result = Math.min(result, cnt);
            continue;
        }
        
        const bs = bank.filter(e => unMatchedCnt(e, str) == 1);
        bs.forEach(e => toVisit.push([e, cnt + 1]));
        
    }
    
    return (result === Infinity)? -1:result;
};
    
function unMatchedCnt (str1, str2) {
    let cnt = 0;
    str1.split('').forEach((e, i) => {
        if (e == str2[i]) cnt++;
    })
    return str1.length - cnt;
}