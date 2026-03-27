class Solution:
    def areSimilar(self, mat: List[List[int]], k: int) -> bool:
        m, n = len(mat), len(mat[0])
        for i in range(m):
            for j in range(n):
                if i % 2 == 0:
                    targetIndex = (j - k) % n
                    if mat[i][j] != mat[i][targetIndex]:
                        return False
                if i % 2 == 1:
                    targetIndex = (j + k) % n
                    if mat[i][j] != mat[i][targetIndex]:
                        return False

        return True

