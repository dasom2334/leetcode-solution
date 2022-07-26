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
    let flag = false;
    const dfs = (node) => {
        if (flag) return;
        if (!node || node == p || node == q ) {
            return node;
        }        
        const l = dfs(node.left);
        const r = dfs(node.right);
        if (l && r) {
            flag = true;
            return node;
        } 
        return l || r;
    }
    return dfs(root);
};
var lowestCommonAncestorOld = function(root, p, q) {
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
        
        if ((node.left)?dfs(node.left, stack):false) {
            return true;
        }
        if ((node.right)?dfs(node.right, stack):false) {
            return true;
        }
        stack.pop();
        if (stack.length < result + 1) {
            result = stack.length - 1;
        }
        
    }
    dfs(root);
    return stack[result];
};