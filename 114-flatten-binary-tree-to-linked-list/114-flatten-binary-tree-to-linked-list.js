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
    let node = root;
    while(node) {
        if (node.left) {
            let tn = node.left;
            while(tn.right) {
                tn = tn.right;
            }
            tn.right = node.right;
            node.right = node.left;
            node.left = null;
        }
        node = node.right;
        // console.log(root);
    }
};

var flattenGarbageLogic = function(root) {
    if (!root) return;
    const result = new TreeNode(0);
    let node = result;
    const dfs = (n) => {
        if (n == null) return;
        node.right = new TreeNode(n.val);
        node = node.right;
        
        dfs(n.left);
        dfs(n.right);
        
    }
    dfs(root);
    root.left = null;
    root.right = result.right.right;
};