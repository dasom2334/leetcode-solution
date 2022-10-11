/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Infinity;
    let max = -Infinity;
    
    for (const n of nums) {
        if (min < max && max < n) {
            return true;
        }
        
        if (min >=n) min = n;
        else max = n;
        // console.log(min, max);
    }
    
    return false;
};