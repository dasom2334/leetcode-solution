/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length;
    
    while (r - l >= k) {
        if (x - arr[l] > arr[r] - x) {
            l++;
        } else {
            r--;
        } 
        // console.log(l, r);
    }
    return arr.slice(l, r+1);
};