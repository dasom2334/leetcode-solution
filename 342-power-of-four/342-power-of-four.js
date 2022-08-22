/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    const bit = (n >>> 0).toString(2);
    
    return (n == 1 || (bit[0] == '1' && bit.length % 2 == 1 && parseInt(bit.slice(1)) == 0))
};