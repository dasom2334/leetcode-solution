/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const start = ['(', '{', '['];
    const end = [ ')', '}', ']'];
    const string = s.split('');
    let stack = [];
    
    while (string.length > 0) {
        const c1 = string.pop();
        if (start.includes(c1)) {
            const c2 = stack.pop();
            if (end.indexOf(c2) !== start.indexOf(c1)) {
                return false;
            }
        } else {
            stack.push(c1);
        }
    }
    return (stack.length == 0)? true:false;
};