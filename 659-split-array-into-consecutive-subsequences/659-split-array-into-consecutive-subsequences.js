/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    
    let map = new Map();
    
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    const ks = [...map.keys()];
    let q = new Array(map.get(ks[0])).fill(1);
    for (let i = 1; i < ks.length; i++) {
        if (ks[i - 1] + 1 !== ks[i]) {
            if (q.filter(e => e < 3).length > 0) return false;
            q = [];
        }
        
        let count = map.get(ks[i]);
        let c = map.get(ks[i]) - q.length;
        
        if (c > 0) {
            q = [...q, ...(new Array(c).fill(0))];
        } else if (c !== 0) {
            const outs = q.splice(0, -c);
            if (outs.filter(e => e < 3).length > 0) return false;
        }
        q = q.map(e => e + 1);
    }
    
    
    return (q.filter(e => e < 3).length == 0)? true: false;
};