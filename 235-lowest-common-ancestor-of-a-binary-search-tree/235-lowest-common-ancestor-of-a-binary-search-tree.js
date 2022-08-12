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
    // console.log(root, p, q);
    // https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
    let flag = false;
    const dfs = (node) => {
        if (flag) return null;
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