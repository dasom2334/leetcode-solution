class Solution:
    def subsequencePairCount(self, nums: List[int]) -> int:
        result = 0
        mod = 10 ** 9 + 7
        n = max(nums)
        dp = [[0] * (n + 1) for _ in range(n + 1)]
        dp[0][0] = 1
        for i in nums:
            ndp = [[0] * (n + 1) for _ in range(n + 1)]
            for j in range(n + 1):
                div = math.gcd(j, i)
                for k in range(n + 1):
                    v = dp[j][k]
                    if v == 0:
                        continue
                    div2 = math.gcd(k, i)
                    ndp[j][k] = (ndp[j][k] + v) % mod
                    ndp[div][k] = (ndp[div][k] + v) % mod
                    ndp[j][div2] = (ndp[j][div2] + v) % mod
            dp = ndp
        for j in range(1, n + 1):
            result += dp[j][j]
            result = result % mod

        return result