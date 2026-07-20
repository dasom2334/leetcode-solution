class Solution:
    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        k %= m * n
        if k == 0:
            return grid
        ng = [[0] * n for _ in range(m)]
        for i in range(m):
            for j in range(n):
                y = (j - k) % n
                x = (i - k // n - (1 if j - k % n < 0 else 0)) % m
                ng[i][j] = grid[x][y]

        return ng


