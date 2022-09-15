/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
    const sortedChanged = changed.sort((a, b) => a - b);
    let map = new Map();
    let result = [];
    for (const num of sortedChanged) {
        if (map.get(num) > 0) {
            // console.log(true, num/2, num)
            result.push(num/2);
            map.set(num, map.get(num) - 1);   
        } else {
            // console.log(false, num, num*2)
            map.set(num*2, (map.has(num*2))?map.get(num*2) + 1:1);    
        }
        
    }
        
    return (result.length == changed.length / 2) ? result:[];
};