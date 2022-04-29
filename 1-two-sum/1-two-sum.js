/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (const i1 in nums) {
        for (let i2 = parseInt(i1) + 1; i2 < nums.length; i2++) {
            if (nums[i1] + nums[i2] == target) {
                return [i1, i2];
            }
        }
    }
};