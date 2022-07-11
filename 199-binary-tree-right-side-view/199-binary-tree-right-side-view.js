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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let result = [];
    
    let toVisit = [[0, root]];
    
    
    while (toVisit.length > 0) {
        
        const c = toVisit.pop();
        if (c[1] !== null) {
            result[c[0]] = c[1].val; 
            toVisit = [...toVisit, [c[0]+1, c[1].right], [c[0]+1, c[1].left]];
        }
    }
    return result;
};