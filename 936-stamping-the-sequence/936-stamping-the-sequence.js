/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    let str = target.split('');
    let result = [];
    while (true) {
        let allChange = false;
        for (let i = 0; i < target.length; i++) {
            let change = false;
            for (let j = 0; j < stamp.length; j++) {
                if (str[i+j] == stamp[j]) {
                    change = true;
                    continue;
                } else if (str[i+j] == '?') {
                    continue;
                } else {
                    change = false;
                    break;
                }
            }
            if (change) {
                for (let m = i; m < i+stamp.length; m++) {
                    str[m] = '?';
                }
                result = [i, ...result];
                allChange = true;
            }
        }
        if (!allChange) break;
    }
    
    
    if (str.join('') !== new Array(target.length).fill('?').join('')) return [];
    return result;
};