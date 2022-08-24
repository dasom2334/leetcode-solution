/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    const int = n.toString(2);
    // console.log(parseInt(int.slice(1)))
    const s = int.slice(1);
    return int[0] == '1' && (!s || parseInt(s) == 0);
};