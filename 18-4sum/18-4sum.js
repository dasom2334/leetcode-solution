/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    
    const ons = nums.sort((a, b) => a - b);
    const result = [];
    
    for (let i = 0; i < nums.length - 3; i++) {
        for (let j = i+1; j < nums.length - 2; j++) {
            const two = ons[i] + ons[j];
            let l = j+1;
            let r = ons.length - 1;
            
            while(l < r) {
                if (two + ons[l] + ons[r] < target) {
                    l++;
                } else if (two + ons[l] + ons[r] > target) {
                    r--;
                } else {
                    const arr = [ons[i], ons[j], ons[l], ons[r]];  
                    const str = arr.join(',');
                    if (!result.includes(str)) {
                        result.push(str)
                    }
                    l++;
                }
                
            }
        }
    }
    return result.map(e => e.split(','));
};