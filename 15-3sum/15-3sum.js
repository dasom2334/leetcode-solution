/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const onums = nums.sort((a, b) => a - b);
    let result = [];
    // console.log(onums)
    for (let i = 0; i < nums.length; i++) {
        if (onums[i] == onums[i-1]) continue;
        for (let j = nums.length - 1; j > 0; j--) {
            if (onums[j] == onums[j+1]) continue;
            if (onums[i] + onums[j] > 0) {
                let k = j - 1; 
                while (k > i) {
                    let ts = onums[i] + onums[j] + onums[k];
                    // let tstring = onums[i] +','+ onums[j] +','+ onums[k];
                    if (ts == 0) {
                        result.push(onums[i] +','+ onums[j] +','+ onums[k]);
                        break;
                    } else if (ts < 0) break;
                    k--;
                }
            } else {
                let k = i + 1;
                while (k < j) {
                    let ts = onums[i] + onums[j] + onums[k];
                    if (ts == 0 ) {
                        result.push(onums[i] +','+ onums[j] +','+ onums[k]);
                        break;
                    } else if (ts > 0) break;
                    k++;
                }
            }
        }
    }
    result = new Set(result);
    // result = new Set(result.map(e => e1.map((e1, i1) => onums[i1])));
    // console.log(result);
    return [...result].map(e => e.split(','));
};