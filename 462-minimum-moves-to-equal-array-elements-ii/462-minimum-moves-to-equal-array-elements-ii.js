/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    const ns = nums.slice().sort((a, b) => a - b);
    const target = ns[~~(ns.length/2)];
    return ns.map(e => Math.abs(e - target)).reduce((p, c) => p + c, 0);
};