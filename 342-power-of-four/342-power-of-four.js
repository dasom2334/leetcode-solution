/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    const bit = (n >>> 0).toString(2);
    // console.log((n & (n - 1)) == 0);
    // console.log(bit.length % 2 == 1 );
    return (n > 0 && (n & (n - 1)) == 0 && bit.length % 2 == 1 )
}