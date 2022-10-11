/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let min = Infinity;
    let min2 = Infinity;
    
    for (const n of nums) {
        if (min >= n) {
            min = n;
        } else if (min2 >= n) {
            min2 = n;
        } else {
            return true;
        }
        // console.log(min, min2);
    }
    
    return false;
};