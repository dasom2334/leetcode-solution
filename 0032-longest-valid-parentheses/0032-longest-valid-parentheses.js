/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let stack = [];
    let max = 0;
    
    
    
    for (let i = 0; i < s.length; i++) {
        stack.push([s[i], i]);
        while (stack.length > 1 && stack.at(-2)[0] == "(" && stack.at(-1)[0] == ")") {
            stack.pop();
            stack.pop();
        }
    }
    
    stack.push(["", s.length]);
    stack.unshift(["", -1]);
    
    for (let i = stack.length - 1; i > 0; i--) {
        max = Math.max((stack[i][1] - stack[i-1][1]) - 1, max);
    }
    console.log(stack);
    return max;  
};