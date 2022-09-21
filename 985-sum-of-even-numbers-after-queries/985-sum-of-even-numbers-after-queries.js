/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(nums, queries) {
    let result = [];
    // console.log(nums, queries);
    let first = nums.filter(e => e % 2 == 0).reduce((p, c) => p + c, 0);
    
    for (const query of queries) {
        const [val, index] = query;
        if (nums[index] % 2 == 0) {
            first -= nums[index];
        }
        nums[index] += val;
        if (nums[index] % 2 == 0) {
            first += nums[index];
        }
        
        result.push(first);
    }
    
    return result;
};