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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    const dfs = (node) => {
        if (node == null) {
            return false;
        }
        node.left = (dfs(node.left))? node.left:null;
        node.right = (dfs(node.right))? node.right:null;
        if(node.left == null && node.right == null) {
            if (node.val == 1) return true;
            else return false;
        }
        return true;
    };
    
    return (dfs(root)) ? root:null;
};