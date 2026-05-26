class Solution:
    def maxJumps(self, arr: List[int], d: int) -> int:
        n = len(arr)
        sorted_idx = sorted(range(n), key=lambda x: arr[x], reverse=True)
        dp = [0] * n
        # for i in range(n):
        #     m = dp[i]
        #     changed = False
        #     for j in range(1, i):
        #         if sorted_idx[j] - sorted_idx[i] < d:
        #             m = max(m, dp[j])
        #             changed = True
        #     if changed:
        #         dp[i] = m + 1
            
        # return max(dp)
        for i in range(n):
            idx = sorted_idx[i]
            a = arr[idx]
            for j in range(idx + 1, min(n, idx + d + 1 )):
                if a <= arr[j]:
                    break
                dp[j] = max(dp[j], dp[idx] + 1)
            for j in range(idx - 1, max(-1, idx - d - 1), -1):
                if a <= arr[j]:
                    break
                dp[j] = max(dp[j], dp[idx] + 1)
        return max(dp) + 1
