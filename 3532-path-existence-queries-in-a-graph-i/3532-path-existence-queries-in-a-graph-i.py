class Solution:
    def pathExistenceQueries(self, n: int, nums: List[int], maxDiff: int, queries: List[List[int]]) -> List[bool]:
        result = []
        idxs = dict()
        cur_g = 0
        idxs[nums[0]] = 0
        for i in range(1, n):
            if nums[i] - nums[i-1] > maxDiff:
                cur_g += 1
            idxs[nums[i]] = cur_g

        for i, j in queries:
            i_idx = idxs[nums[i]]
            j_idx = idxs[nums[j]]
            r = True if j_idx == i_idx else False
            result.append(r)
        return result