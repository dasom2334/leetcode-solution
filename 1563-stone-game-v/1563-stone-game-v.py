class Solution:
    def stoneGameV(self, stoneValue: List[int]) -> int:
        @lru_cache(None)
        def dfs(left: int, right: int):
            if left == right:
                return 0
            total = sum(stoneValue[left:right + 1])
            r = 0
            suml = 0
            sumr = total
            for i in range(left, right):
                suml += stoneValue[i]
                sumr -= stoneValue[i]
                if suml < sumr:
                    r = max(r, dfs(left, i) + suml)
                elif suml > sumr:
                    r = max(r, dfs(i + 1, right) + sumr)
                else:
                    r = max(
                        r,
                        max(
                            dfs(left, i),
                            dfs(i + 1, right)
                        ) + suml
                    )
            return r
        return dfs(0, len(stoneValue) - 1)