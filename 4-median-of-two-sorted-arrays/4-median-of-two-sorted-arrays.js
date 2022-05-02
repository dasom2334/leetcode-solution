/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = nums1.concat(nums2);
    nums.sort(function(a, b){ return a-b; });
    if (nums.length % 2 == 1) {
        return nums[Math.ceil(nums.length/2) -1];
    } else {
        const n1 = nums[(nums.length/2) - 1];
        const n2 = nums[(nums.length/2)];
        return (n1 + n2)/2
    }
};