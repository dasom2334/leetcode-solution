/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    
    for (const c of s) {
        const l = stack.at(-1);
        
        if (stack.length > 0 && l !== c && new RegExp(l, 'i').test(c)) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    return stack.join('');
    
};
var makeGood2 = function(s) {
    let str = s;
    let changed = true;
    
    
    while (changed) {
        changed = false;
        for (let i = 0; i < str.length - 1; i++) {
            const regexp = new RegExp(str[i], 'i');
            if (str[i] !== str[i+1] && regexp.test(str[i+1])) {
                str = str.slice(0, i) + str.slice(i + 2);
                changed = true;
                break;
            }

        }
    }
    
    return str;
};