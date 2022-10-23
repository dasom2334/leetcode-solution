/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const map = new Map();
    const result = [-1, -1];
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], 2);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    for (let i = 1; i <= nums.length; i++) {
        if (map.get(i) == 2) result[0] = i;
        if (!map.has(i)) result[1] = i;
        if (!result.includes(-1)) break;
    }
    
    
    return result;
};