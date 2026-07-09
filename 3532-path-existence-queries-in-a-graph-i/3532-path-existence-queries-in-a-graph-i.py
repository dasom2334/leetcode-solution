class Solution:
    def pathExistenceQueries(self, n: int, nums: List[int], maxDiff: int, queries: List[List[int]]) -> List[bool]:
        result = []
        idxs = [0] * n
        for i in range(1, n):
            idxs[i] = idxs[i-1]
            if nums[i] - nums[i-1] > maxDiff:
                idxs[i] += 1

        for i, j in queries:
            r = True if idxs[i] == idxs[j] else False
            result.append(r)
        return result