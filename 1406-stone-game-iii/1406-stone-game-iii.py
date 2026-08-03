class Solution:
    def stoneGameIII(self, stoneValue: List[int]) -> str:
        n = len(stoneValue)
        dp = [0] * (n + 1)

        for i in range(n - 1, -1, -1):
            cur = 0
            best = -inf
            for j in [1, 2, 3]:
                if i + j > n:
                    break
                cur += stoneValue[i + j - 1]
                best = max(best, cur - dp[i + j])
            dp[i] = best
        if dp[0] > 0:
            return 'Alice'
        if dp[0] < 0:
            return 'Bob'
        return 'Tie'
    