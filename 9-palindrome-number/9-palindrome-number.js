/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let result = true;
    if (x < 0) return false;
    let str = x.toString();
    // console.log(Math.floor(str.length));
    for (let i = 0; i <= Math.floor(str.length)/2; i++) {
        if(str[i] !== str[str.length - 1 - i])
            result = false;
    }
    return result;
};