/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let before = -101;
    let result = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == before) {
            nums[i] = "_";
        } else {
            before = nums[i];
            result++;
        }
        // console.log(nums);
    }
    
    // console.log(result, nums);
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
    // console.log(nums);
    return result;
};