/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let result = [];
    for (const num of nums) {
        if (num % 2 == 1) {
            result.push(num);
        } else {
            result.unshift(num);
        }
    }
    return result;
};