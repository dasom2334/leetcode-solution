/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);
    
    for (let j = 0; j < nums.length; j++) {
        let result = nums[j];
        for (let i = j+2; i < nums.length; i++) {
            if (result < nums[i] + nums[j+1]) {
                return result + nums[i] + nums[j+1];
            }
        }   
    }
    
    return 0;
};