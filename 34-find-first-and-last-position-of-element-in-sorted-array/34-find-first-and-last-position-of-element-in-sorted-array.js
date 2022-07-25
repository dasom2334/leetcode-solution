/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const result = [-1, -1];
    const results = nums.map((e, i) => {
        if (e == target) {
            return i;
        } else {
            return -1;
        }
    }).filter(e => e !== -1);
    if (results.length > 0) {
        result[0] = results[0];
        result[1] = results.pop();
    }
    return result;
};

var searchRangeOld = function(nums, target) {
    let result = [-1, -1];
    
    let l = 0;
    let r = nums.length - 1;
    let [ml, mr] = [l, r];
    while (l < r && result.includes(-1)) {
        if (result[0] == -1) {
            if (nums[l] < target) {
                ml = l;
                l += Math.ceil((r-l)/2);
            } else if (nums[l] == target && nums[l-1] != target) {
                result[0] = l;
            } else {
                l -= Math.ceil((l-ml)/2);
                
            }
        }
        
        if (result[1] == -1) {
            if (nums[r] > target) {
                mr = r;
                r -= Math.ceil((r-l)/2);
            } else if (nums[r] == target && nums[r+1] != target) {
                result[1] = r;
            } else {
                r += Math.ceil((mr - r)/2);
            }
        }
        
        // console.log(l, r, result);
    }
    
    if (l == r && nums[l] == target) {
        result = [l, l]; 
    }
    
    return result;
};