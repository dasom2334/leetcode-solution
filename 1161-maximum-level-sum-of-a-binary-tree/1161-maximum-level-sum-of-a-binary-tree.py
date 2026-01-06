# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        sum_map = defaultdict(int)
        max_sum = 10 ** 5 * -1
        max_sum_level = 0

        def bfs(node, level):
            nonlocal sum_map
            if node is None:
                return
            sum_map[level] += node.val

            bfs(node.left, level + 1)
            bfs(node.right, level + 1)
            return
        
        bfs(root, 1)
        # print(sum_map)

        max_sum_level = max(sum_map, key=sum_map.get)


        return max_sum_level