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
                // console.log(str[i+j], stamp[j], i, j);
                if (str[i+j] == stamp[j]) {
                    change = true;
                    continue;
                } else if (str[i+j] == '?') {
                    continue;
                } else {
                    change = false;
                    // console.log('break', str[i+j], stamp[j], i, j);
                    break;
                }
            }
            // console.log(change);
            if (change) {
                for (let m = i; m < i+stamp.length; m++) {
                    str[m] = '?';
                }
                result = [i, ...result];
                allChange = true;
            }
            
            // console.log(str);
        }
        // console.log(str);
        if (!allChange) break;
    }
    
    
    // console.log(str);
    if (str.join('') !== new Array(target.length).fill('?').join('')) return [];
    return result;
};