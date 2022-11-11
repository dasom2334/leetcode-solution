/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let result = 0;
    
    
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i-1] !== nums[i]) {
            nums[result] = nums[i-1];
            result++;
        }
    }
    
    return result;
};
var removeDuplicates2 = function(nums) {
    let before = -101;
    let result = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == before) {
            nums[i] = "_";
        } else {
            before = nums[i];
            result++;
        }
    }
    
    nums.sort((a, b) => {
        if (a == "_" && b == "_") {
            return 0;
        } else if (a == "_") {
            return 1;
        } else if (b == "_") {
            return -1;
        } else {
            return a - b;
        }
    });
    return result;
};