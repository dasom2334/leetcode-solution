/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    
    while (l < r && numbers[l] + numbers[r] !== target) {
        // console.log(l, r, numbers[l] + numbers[r], target);
        if (target >= numbers[l] + numbers[r]) {
            l++;
        } else {
            r--;
        }
        
    }
    return [l + 1, r + 1];
};