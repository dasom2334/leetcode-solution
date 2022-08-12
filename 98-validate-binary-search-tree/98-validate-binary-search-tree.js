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
        // console.log(node, min, '<', node.left, '<', node, '<', node.right, '<', max);
        if (!node.right && !node.left) {
            // console.log(true,1,node, min, max);
            return true;   
        } else if ((node.right && (node.right.val >= max || node.right.val <= node.val)) || (node.left && (node.left.val <= min || node.left.val >= node.val))) {
            // console.log(false, 2);
            // console.log(false, 2,node, min, max, false,node.val, node.left.val, node.right.val, );
            // console.log(node.right, node.right.val >= max , node.right.val <= node.val);
            // console.log((node.left && (node.left.val <= min || node.left.val >= node.val)));
            return false;
        } else  {
            const r = ((node.right) ? dfs(node.right, node.val, max):true ) && ((node.left)? dfs(node.left, min, node.val):true);
            
            // console.log(r, 3, node, min, max);
            return r;
            return ((node.right) ? dfs(node.right, min, node.val):true ) && ((node.left)? dfs(node.left, node.val, max):true);
        }
    }
    
    return dfs(root);
};