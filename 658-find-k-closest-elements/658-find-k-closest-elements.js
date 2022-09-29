/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = -1;
    let r = arr.length;
    while (l < r - 1) {
        if (arr[l+1] <= x) {
            l++;
        } 
        if(arr[r-1] >= x) {
            r--;
        } 
        // console.log(l, r);
    }
    
    let count = k;
    let result = [];
    if (l == r) {
        result.push(arr[l]);
        l--; r++; count--;
    }
    while (count > 0) {
        // console.log(l, r, count, x - arr[l], arr[r] - x);
        // console.log(l >= 0, x - arr[l] > arr[r] - x, r >= arr.length,)
        if (l >= 0 && (x - arr[l] <= arr[r] - x || r >= arr.length)) {
            result.unshift(arr[l]);
            l--;
        } else if(r < arr.length) {
            result.push(arr[r])
            r++;
        } 
        count--;
    }
    
    
    return result;
};