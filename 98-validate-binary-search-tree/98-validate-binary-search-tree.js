/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = (node, min = -Infinity, max = Infinity) => {
        if (!node.right && !node.left) {
            return true;   
        } else if ((node.right && (node.right.val >= max || node.right.val <= node.val)) || (node.left && (node.left.val <= min || node.left.val >= node.val))) {
            return false;
        } else  {
            return ((node.right) ? dfs(node.right, node.val, max):true ) && ((node.left)? dfs(node.left, min, node.val):true);
        }
    }
    
    return dfs(root);
};