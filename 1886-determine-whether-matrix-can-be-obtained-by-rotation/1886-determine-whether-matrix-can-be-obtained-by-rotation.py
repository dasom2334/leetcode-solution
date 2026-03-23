class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        rows, cols = len(mat), len(mat[0])
        result0 = True
        result90 = True
        result180 = True
        result270 = True
        for i in range(rows):
            for j in range(cols): 
                if mat[i][j] != target[i][j]:
                    result0 = False
                if mat[i][j] != target[j][cols - 1 - i]:
                    result90 = False
                if mat[i][j] != target[cols - 1 - i][rows - 1 - j]:
                    result180 = False
                if mat[i][j] != target[rows - 1 - j][i]:
                    result270 = False
        return result0 or result90 or result180 or result270