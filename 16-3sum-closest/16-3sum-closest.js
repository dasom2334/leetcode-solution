/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    const ons = nums.map((e, i) => [i, e]).sort((a, b) => a[1] - b[1]);
    let min = Infinity;
    let result = nums[0] + nums[1] + nums[2];
    for(let i = 0; i < ons.length - 2; i++) {
        let l = i+1;
        let r = ons.length - 1;
        let m = Infinity;
        while (l < r) {
            const ts = ons[l][1] + ons[r][1] + ons[i][1];
            if (ts == target) {
                return ts;
            } else if (ts > target) {
                r--;
            } else {
                l++;
            }
            const diff = Math.abs(target - ts);
            if (diff < min) {
                min = diff;
                result = ts;
            }
            
        }
    }
    return result;
};
