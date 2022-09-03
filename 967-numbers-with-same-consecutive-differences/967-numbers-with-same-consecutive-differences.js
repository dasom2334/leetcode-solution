/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let set = new Set();
    
    let tv = '123456789'.split('');
    
    while (tv.length > 0) {
        
        const c = tv.shift();
        
        if (c.length == n) {
            set.add(c);
            continue;
        }
        
        const num = parseInt(c.at(-1));
        
        if (num + k < 10) {
            tv.push(c+(num+k));
        }
        
        if (num - k >= 0) {
            tv.push(c+(num-k));
        }
        // console.log(tv);
        
    }
    
    
    return [...new Set(set)];
};