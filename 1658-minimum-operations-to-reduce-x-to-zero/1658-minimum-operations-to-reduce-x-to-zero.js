/*
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let sum = nums.reduce((p, c) => p + c, 0);
    // console.log(sum);
    let result = nums.length + 1;
    let l = 0;
    let r = 0;
    let s = nums[0];
    while (l  <= nums.length) {
        // console.log(l, r, s, sum - x);
        if (s == sum - x) {
            result = Math.min(result, l + nums.length - 1 - r);
        }
        if (s < sum - x) {
            r++;
            s += nums[r];
        } else {
            s -= nums[l];
            l++;
        }
        
    }
    return (result !== nums.length + 1)? result:-1;
};