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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let result = [];
    
    let toVisit = [[0, root]];
    
    while(toVisit.length > 0) {
        const c = toVisit.shift();
        if (c[1] !== null) {
            if (result[c[0]] == undefined) {
                result[c[0]] = [];
            }
            result[c[0]].push(c[1].val);
            toVisit = [...toVisit, [c[0] + 1, c[1].left], [c[0] + 1, c[1].right]];
        }
    }
    
    return result;
};