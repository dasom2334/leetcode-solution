/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let str = s;
    let changed = true;
    
    
    while (changed) {
        changed = false;
        for (let i = 0; i < str.length - 1; i++) {
            const regexp = new RegExp(str[i], 'i');
            if (str[i] !== str[i+1] && regexp.test(str[i+1])) {
                // console.log(regexp.test(str[i+1]), str[i], str[i+1]);
                // console.log(str.slice(0, i), str.slice(i + 2))
                str = str.slice(0, i) + str.slice(i + 2);
                changed = true;
                break;
            }

        }
    }
    
    return str;
};