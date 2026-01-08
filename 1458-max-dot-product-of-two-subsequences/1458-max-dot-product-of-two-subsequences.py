class Solution:
    def maxDotProduct(self, nums1: List[int], nums2: List[int]) -> int:
        m = len(nums1)
        n = len(nums2)
        dp = [[-1000] * m for _ in range(n)]

        for (i, n2) in enumerate(nums2):
            for (j, n1) in enumerate(nums1):
                left = dp[i][j - 1] if j > 0 else -1000000
                left_top = dp[i - 1][j - 1] if i > 0 and j > 0 else 0
                top = dp[i - 1][j] if i > 0 else -1000000
                cur = n1 * n2
                dp[i][j] = max(left, left_top + cur, top, cur)
                # print(i, j, n1, n2, dp, cur)
    

        return dp[n - 1][m - 1]