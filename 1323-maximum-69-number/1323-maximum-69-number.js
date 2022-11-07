/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const nums = num + "";
    let i = 0;
    for (; i < nums.length; i++) if (nums[i] == '6') break;
    
    return (nums[i] == '6') ?nums.slice(0, i) + '9' + nums.slice(i + 1) : nums;
};