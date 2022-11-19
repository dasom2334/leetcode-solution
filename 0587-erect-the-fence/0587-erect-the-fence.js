/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function(trees) {
     trees.sort((a, b) => b[0] - a[0] == 0 ? b[1] - a[1] : b[0] - a[0]);
    
    const stack = [];
    const orientation = (a, b, c) => {
        return (b[1] - a[1]) * (c[0] - b[0]) - (b[0] - a[0]) * (c[1] - b[1]);
    }
    
    for (let i = 0; i < trees.length; i++) {
        while(stack.length >= 2 && orientation(stack.at(-1), stack.at(-2), trees[i]) > 0) {
            stack.pop();
            
        }
        stack.push(trees[i]);
    }
    stack.pop();
    
    for (let i = trees.length - 1; i >= 0; i--) {
        
        while(stack.length >= 2 && orientation(stack.at(-1), stack.at(-2), trees[i]) > 0) {
            stack.pop();
        }
        
        stack.push(trees[i]);
    }
    
    return [...new Set(stack)];
};