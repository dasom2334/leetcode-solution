class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        n = len(s)
        dp = [0] * n
        f = [0] * n
        f[0] = 1


        for i in range(minJump):
            dp[i] = 1
        for i in range(minJump, n):
            l, r = i - maxJump, i - minJump
            if s[i] == '0':
                cur = dp[r] - (0 if l <= 0 else dp[l - 1])
                f[i] = 1 if cur != 0 else 0
            # print(dp)
            dp[i] = dp[i - 1] + f[i]
        
        # print(dp, f)
        return f[n - 1] == 1