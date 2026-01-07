# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxProduct(self, root: Optional[TreeNode]) -> int:
        totalSum = 0
        result = 0
        modulo = (10 ** 9) + 7

        def _dfs(node, caculate=False) -> int:
            nonlocal result
            l = 0
            r = 0

            if node.left:
                left = _dfs(node.left, caculate) 
                l = left if left is not None else 0
            if node.right:
                right = _dfs(node.right, caculate)
                r = right if right is not None else 0

            curSum = (l + r + node.val)
            if caculate:
                multiply = ((totalSum - curSum) * curSum) 
                result = max(multiply, result)

            return curSum 

        totalSum = _dfs(root)
        _dfs(root, True)
        return result % modulo