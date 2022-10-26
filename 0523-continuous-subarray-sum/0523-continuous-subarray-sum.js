/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    const map = new Map();
    map.set(0, 0);
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum % k)) {
            if (map.get(sum % k) < i) return true;
        } else {
            map.set(sum % k, i + 1);
        }
        // console.log(map);
    }
    return false;
};