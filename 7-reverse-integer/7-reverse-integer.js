/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const limit = 2**31
    let result = '';
    
    let num = x; 
    if (x < 0) {
        num = (-1 * x);
        result = '-';
    }
    const str = num.toString().split('').reverse().join('');
    
    result += str;
    
    result = parseInt(result);
    
    if (result > limit || result < -limit) {
        result = 0;
    }
    
    
    return result;
};
