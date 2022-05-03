/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let limit = (2**31);
    
    let result = '';
    // console.log(2**31);
    let num = x; 
    if (x < 0) {
        num = (-1 * x);
        result = '-';
    } else {
        limit--;
    }
    let str = num.toString().split('').reverse().join('');
    const limitStr = limit.toString();
    const limitLen = limitStr.length;
    // console.log(str, limit);
    // console.log(str.length, limit.toString().length);
    
    // console.log(str);
    if (str.length > limitLen) {
        return 0;
    } else if (str.length == limitLen) {
        let isSame = true;
        for (const i in limitStr) {
            // console.log(parseInt(limitStr[i]), parseInt(str[i]))
            // console.log(parseInt(limitStr[i]) < parseInt(str[i]))
            if (parseInt(limitStr[i]) < parseInt(str[i])) {
                return 0;
            } else if (parseInt(limitStr[i]) > parseInt(str[i])) {
                isSame = false;
                break;
            }
        }  
        if (isSame) return 0;
    }
    
    result += str;
    return parseInt(result);
};
