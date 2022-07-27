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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;
    const result = new TreeNode(0);
    // let rp = result;
    let node = result;
    const dfs = (n) => {
        if (n == null) return;
        node.right = new TreeNode(n.val);
        node = node.right;
        
        dfs(n.left);
        dfs(n.right);
        // console.log(result);
        
    }
    dfs(root);
    // console.log(result, result.right);
    root.left = null;
    root.right = result.right.right;
};