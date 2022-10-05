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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (root == null) return root;
    if (depth - 1 == 1) {
        const nl = new TreeNode(val);
        const nr = new TreeNode(val);
        nl.left = root.left;
        nr.right = root.right;
        root.left = nl;
        root.right = nr;
        return root;
    } else if (depth == 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    
    addOneRow(root.left, val, depth - 1);
    addOneRow(root.right, val, depth - 1);
    
    
    return root;
};