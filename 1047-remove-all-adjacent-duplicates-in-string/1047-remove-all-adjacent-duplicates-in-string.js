/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    
    
    for (const c of s) {
        if (stack.length > 0 && stack.at(-1) == c) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    
    return stack.join('');
};