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
    let toVisit = [[root, ""]];
    let [pi, qi] = [-1, -1];
    while((pi === -1 || qi === -1)) {
        const n = toVisit.pop();
        if (n[0]) {
            toVisit = [...toVisit, [n[0].left, n[1] + "l"], [n[0].right, n[1] + "r"]];
            if (n[0] == p) pi = n[1];
            if (n[0] == q) qi = n[1];
        }
    }
    let index = 0;
    let result = root;
    while (pi[index] == qi[index]) {
        if (pi[index] == "l") {
            result = result.left;
        } else {
            result = result.right;
        }
        index++;
    }
    return result;
};