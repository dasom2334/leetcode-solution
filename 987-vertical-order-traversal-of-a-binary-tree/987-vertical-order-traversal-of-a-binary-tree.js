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
var verticalTraversal = function(root) {
    let dict = {};
    
    let tv = [[root, 0, 0]];
    while (tv.length > 0) {
        const c = tv.shift();
        
        if (c[0] == null) continue;
        
        if (!(c[2] in dict)) dict[c[2]] = {};
        if (!(c[1] in dict[c[2]])) {
            dict[c[2]][c[1]] = [];
        }
        dict[c[2]][c[1]].push(c[0].val);
        
        
        tv = [...tv, [c[0].left, c[1] + 1, c[2] - 1], [c[0].right, c[1] + 1, c[2] + 1]];
    }
    // console.log(dict);
    // console.log(Object.keys(dict).sort((a, b) => a - b).map(e => Object.values(dict[e]).map(e1 => e1.sort((a, b) => a - b)).flat()));
    return Object.keys(dict).sort((a, b) => a - b).map(e => Object.values(dict[e]).map(e1 => e1.sort((a, b) => a - b)).flat());
}; 