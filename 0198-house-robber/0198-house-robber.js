/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length > 2) nums[2] += nums[0];
    for (let i = 3; i < nums.length; i++) {
        nums[i] += Math.max(nums[i-2], nums[i-3])
    }
    // console.log(nums)
    return Math.max(nums.at(-1), nums.at(-2) || 0)
};