/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    const nums = num + "";
    const i = nums.indexOf('6');
    return (i !== -1) ? nums.slice(0, i) + '9' + nums.slice(i + 1) : nums;
};