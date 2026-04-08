from functools import reduce

class Solution:
    def xorAfterQueries(self, nums: List[int], queries: List[List[int]]) -> int:
        result = [*nums]
        mod = 10 ** 9 + 7

        for l, r, k, v in queries:
            # print(l, r, k, v)
            idx = l
            while idx <= r:
                result[idx] = (result[idx] * v) % mod
                idx += k
        # print(result, 1 ^ 1)
        return reduce(lambda pre, cur: pre ^ cur, result)


