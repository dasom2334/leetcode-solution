/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((e1, i1) => nums.slice(0, i1+1).reduce((p, c) => p + c, 0));
};