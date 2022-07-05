/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length == 0) return 0;
    const on = nums.sort((a, b) => a - b);
    const onSet = [...(new Set(on))];
    let max = 0;
    let temp = 1;
    // console.log(on);
    // console.log(onSet);
    for (let i = 1; i < onSet.length; i++) {
        // console.log(onSet[i]);
        if (onSet[i-1] + 1 == onSet[i]) {
            temp++;
        } else {
            max = Math.max(max, temp);
            temp = 1;
        }
    }
    max = Math.max(max, temp);
    return max;
};