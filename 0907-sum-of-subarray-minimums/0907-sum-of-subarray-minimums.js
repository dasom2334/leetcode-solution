/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let result = 0;
    const mod = (10 ** 9) + 7
    
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        result += min;
        for (let j = i + 1; j < arr.length; j++) {
            min = Math.min(min, arr[j]);
            result += min;
        }
        result %= mod;
    }
    
    return result;
};