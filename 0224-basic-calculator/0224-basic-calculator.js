/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [0];
    const numCharacter = "0123456789".split('');
    let number = "";
    let lastOper = "+"
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "(":
                stack.push((lastOper === "-")? "-":"+");
                stack.push(0);
                lastOper = "";
                break;
            case ")":
                let last = stack.pop();
                if (stack.length > 1 && stack.pop() === "-") last *= -1; 
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
                    let n = parseInt(number);
                    if (lastOper === "-") n *= -1; 
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