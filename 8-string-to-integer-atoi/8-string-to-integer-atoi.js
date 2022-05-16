/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const allows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', ' '];
    const max = (2**31) - 1;
    const min = -(2**31);
    
    let respec = '';
    let number = '0';
    
    const pn = ['+', '-'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    
    for (const c of s) {
        if (pn.includes(c)) {
            if (respec == '' && number == '0') respec = c;
            else break;
        } else if (numbers.includes(c)) {
            number += c;
        } else if (c != ' ') {
            break;
        } else if (c == ' ' && (respec != '' || number != '0')) {
            break;
        }
    }
    // console.log(respec);
    // console.log(number);
    // console.log(parseInt(number));
    let result = parseInt(respec + number);
    if (result > max) {
        result = max;
    } else if (result < min) {
        result = min;
    }
    
    
    return result;
};