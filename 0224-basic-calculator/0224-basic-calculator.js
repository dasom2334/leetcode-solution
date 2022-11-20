/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [0n];
    const numCharacter = "0123456789".split('');
    let number = "";
    let lastOper = "+"
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                // console.log('(');
                stack.push((lastOper === "-")? "-":"+");
                stack.push(0n);
                lastOper = "(";
                break;
            case ")":
                // console.log(')');
                let last = stack.pop();
                if (stack.length > 1 && stack.pop() === "-") last *= -1n; 
                
                stack[stack.length - 1] += last;
                break;
            case "+":
                lastOper = "+";
                break;
            case "-":
                lastOper = "-";
                break;
            case " ":
                break;
            default :
                number += s[i];
                if (!numCharacter.includes(s[i+1])) {
                    let n = BigInt(number);
                    if (lastOper === "-") n *= -1n; 
                    stack[stack.length - 1] += n;
                    number = "";
                }
                break;
        }
        
        // console.log(stack);
    }
    
    // console.log(stack);
    
    return stack[0];
};