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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const dfs = (node) => {
        if (node == null) return false;
        
        if (node.val !== k/2 && isExists(root, k - node.val)) {
            return true;
        }
        if (dfs(node.left)) {
            return true;
        } 
        
        if (dfs(node.right)) {
            return true;
            
        }
        
        return false;
        
    }
    return dfs(root);
};
var findTargetBfs = function(root, k) {
    let toVisit = [root];
    
    while (toVisit.length > 0) {
        const node = toVisit.shift();
        if (node == null) continue;
        
        if (node.val !== k/2 && isExists(root, k - node.val)) {
            return true;
        }    
        toVisit.push(node.left, node.right);
    }
    
    return false;
};
    
function isExists(root, n) {
    let node = root;
    while (node !== null) {
        if (node.val == n) {
            return true;
        } else if (node.val > n) {
            node = node.left;
        } else {
            node = node.right;
        }
    }
    
    return false;
}
    