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
    let visited = {};
    
    let toVisit = [[0, root]];
    
    
    while (toVisit.length > 0) {
        
        const c = toVisit.pop();
        const dAr = visited[c[0]] ?? [];
        if (c[1] !== null && !dAr.includes(c[1])) {
            visited[c[0]] = [...dAr, c[1]]; 
            toVisit = [...toVisit, [c[0]+1, c[1].right], [c[0]+1, c[1].left]];
        }
    }
    // console.log(visited)
    for(const [depth, nodes] of Object.entries(visited)) {
        result.push(nodes.pop().val);
    }
    return result;
};