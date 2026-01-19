class Solution:
    def largestMagicSquare(self, grid: List[List[int]]) -> int:
        k = min(len(grid), len(grid[0]))
        for kk in range(k, 0, -1):
            for i in range(0, len(grid) - kk + 1):
                for j in range(0, len(grid[0]) - kk + 1):
                    # print(kk, i, j, (len(grid) - kk, ), len(grid[0]) - kk)
                    row_sums = [sum(row[j:j+kk]) for row in grid[i:i+kk]]
                    col_sums = [sum(row[j + c] for row in grid[i:i+kk]) for c in range(kk)]

                    # print('??', row_sums, col_sums, [row[j:j+kk] for row in grid[i:i+kk]], [(col[j:j+kk]) for col in zip(*[row[i:i+kk] for row in grid])])

                    main_diag = sum(grid[l+i][l+j] for l in range(kk))
                    anti_diag = sum(grid[l+i][(j+kk) - 1 - l] for l in range(kk))

                    # print([grid[l+i][l+j] for l in range(kk)], [grid[l+i][kk - 1 - (l+j)] for l in range(kk)])
                    values = row_sums + col_sums + [main_diag, anti_diag]
                    if len(set(values)) == 1:
                        return kk
                    # print(kk, row_sums, col_sums, [main_diag, anti_diag])

        return 1


