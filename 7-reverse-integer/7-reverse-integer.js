/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let result = '';
    
    let num = x; 
    if (x < 0) {
        num = (-1 * x);
        result = '-';
    }
    const str = num.toString().split('').reverse().join('');
    
    result += str;
    
    result = parseInt(result);
    
    if (result > 2**31 || result < -(2**31)) {
        result = 0;
    }
    
    
    return result;
};
