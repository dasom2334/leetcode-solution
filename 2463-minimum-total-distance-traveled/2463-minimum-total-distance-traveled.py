class Solution:
    def minimumTotalDistance(self, robot: List[int], factory: List[List[int]]) -> int:
        sorted_robot = sorted(robot)
        sorted_factory = sorted(factory)
        repair_slot = [p for p, l in sorted_factory for _ in range(l)]

        n, m = len(robot), len(repair_slot) 

        dp = [[0] * (m + 1) for _ in range(n + 1)]

        for i in range(n + 1):
            for j in range(m + 1):
                if i == 0:
                    dp[i][j] = 0
                    continue
                if j == 0:
                    dp[i][j] = float(inf)
                    continue
                    
                lt = dp[i - 1][j - 1]
                l = dp[i][j - 1] 
                distance = abs(sorted_robot[i - 1] - repair_slot[j - 1])
                dp[i][j] = min(lt + distance, l)
        # print(dp)
        return dp[n][m]

