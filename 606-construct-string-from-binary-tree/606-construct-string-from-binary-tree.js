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
 * @return {string}
 */
var tree2str = function(root) {
    
    const po = (node, arr = []) => {
        if (node == null) return arr;
        arr.push(node.val);
        if (node.left == null && node.right == null) return arr;
        arr.push('(');
        po(node.left, arr);
        arr.push(')');
        if (node.right == null) return arr;
        arr.push('(');
        po(node.right, arr);
        arr.push(')');
        return arr;
    };
    
    return po(root).join('');
};