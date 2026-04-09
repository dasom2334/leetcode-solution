class Solution:
    def xorAfterQueries(self, nums: List[int], queries: List[List[int]]) -> int:
        n = len(nums)
        nums = [*nums]
        mod = 10 ** 9 + 7
        sqrt = int(n ** 0.5)

        groups = [[] for _ in range(sqrt)]

        for l, r, k, v in queries:
            if k >= sqrt:
                idx = l
                while idx <= r:
                    nums[idx] = nums[idx] * v % mod
                    idx += k
            else:
                groups[k].append([l, r, v])
        
        difs = [1] * (n + sqrt)
        for k in range(1, sqrt):
            if not groups[k]:
                continue
            difs[:] = [1] * len(difs)
            for [l, r, v] in groups[k]:
                difs[l] = difs[l] * v % mod
                last = ((r - l) // k + 1) * k + l
                inverse = pow(v, mod - 2, mod)
                difs[last] = difs[last] * inverse % mod
            for i in range(k, n):
                difs[i] = difs[i] * difs[i - k] % mod
            for i in range(n):
                nums[i] = nums[i] * difs[i] % mod

        return reduce(lambda pre, cur: pre ^ cur, nums)


