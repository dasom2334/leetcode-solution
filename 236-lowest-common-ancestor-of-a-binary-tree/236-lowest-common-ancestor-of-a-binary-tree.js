/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result = -1;
    
    let stack = [];
    const dfs = (node) => {
        stack.push(node);

        if (node == p || node == q) {
            if (result === -1) {
                result = stack.length - 1;   
            } else {
                return true;
            }
        }        
        const l = (node.left)? dfs(node.left, stack):null;
        const r = (node.right)? dfs(node.right, stack):null;
        if (l || r) {
            return true;
        }
        stack.pop();
        if (result !== -1 && stack.length < result + 1) {
            result = stack.length - 1;
        }
        
    }
    dfs(root);
    // console.log(result);
    return stack[result];
};