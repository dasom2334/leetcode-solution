class Solution:
    def maxProductPath(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        min_dp = [[0] * (cols) for _ in range(rows)]
        max_dp = [[0] * (cols) for _ in range(rows)]
        modulo = 10 ** 9 + 7
        for i in range(rows):
            for j in range(cols):
                if i == 0 and j == 0:
                    min_dp[i][j] = grid[i][j]
                    max_dp[i][j] = grid[i][j]
                    continue
                vals = [
                    min_dp[i-1][j] * grid[i][j] if i-1>=0 else None,
                    min_dp[i][j-1] * grid[i][j] if j-1>=0 else None,
                    max_dp[i-1][j] * grid[i][j] if i-1>=0 else None,
                    max_dp[i][j-1] * grid[i][j] if j-1>=0 else None,
                ]
                valid_vlas = [v for v in vals if v is not None]
                min_dp[i][j] = min(valid_vlas)
                max_dp[i][j] = max(valid_vlas)
        curMax = max_dp[rows-1][cols-1] 

        return curMax % modulo if curMax >= 0 else -1