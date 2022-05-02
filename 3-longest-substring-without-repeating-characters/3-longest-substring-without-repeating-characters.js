/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let arr = [];
    let max = 0;
    
    for (const sc of s) {
        const i = arr.indexOf(sc);
        if (i >= 0) {
            max = Math.max(max, arr.length);
            arr = arr.slice(i+1);
            arr.push(sc);
        } else {
            arr.push(sc);
        }
    }
    max = Math.max(max, arr.length);

    return max;
};