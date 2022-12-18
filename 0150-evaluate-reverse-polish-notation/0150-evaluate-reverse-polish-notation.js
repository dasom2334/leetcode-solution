/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    
    for (let i = 0; i < tokens.length; i++){
        
        if (['+', '/', '-', '*'].includes(tokens[i])) {
            const [a, b] = [stack.pop(), stack.pop()];
            switch(tokens[i]) {
                case '+':
                    stack.push(a+b);
                    break;
                case '-':
                    stack.push(b-a);
                    break;
                case '/':
                    stack.push(~~(b/a));
                    break;
                case '*':
                    stack.push(a*b);
                    break;
            }
        } else {
            stack.push(parseInt(tokens[i]));
        }
            
        
    }
    
    return stack[0];
};