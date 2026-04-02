class Solution:
    def maximumAmount(self, coins: List[List[int]]) -> int:
        abilities = 3
        m, n = len(coins), len(coins[0])
        dp = [[[0] * abilities for _ in range(n)] for _ in range(m)]
        
        for i in range(m):
            for j in range(n):
                coin = coins[i][j]
                if (i == 0 and j == 0):
                    dp[i][j] = [
                        coin, 
                        float(-inf) if coin >= 0 else 0, 
                        float(-inf)
                    ]
                    continue
                [l_zero, l_one, l_two] = dp[i][j - 1] if j > 0 else [float(-inf)] * abilities
                [t_zero, t_one, t_two] = dp[i - 1][j] if i > 0 else [float(-inf)] * abilities

                z = max(l_zero, t_zero)
                o = max(l_one, t_one)
                t = max(l_two, t_two)

                dp[i][j][0] = coin + z
                if (coin < 0):
                    dp[i][j][1] = max(coin + o, z)
                    dp[i][j][2] = max(coin + t, o)
                else:
                    dp[i][j][1] = coin + o
                    dp[i][j][2] = coin + t
        # print(dp)
        return max(dp[m - 1][n - 1])


