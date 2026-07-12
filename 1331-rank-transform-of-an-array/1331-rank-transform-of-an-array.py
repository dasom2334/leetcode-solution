class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        if len(arr) == 0:
            return []
        n = len(arr)
        idxs = list(range(n))
        idxs.sort(key=lambda x: arr[x])
        result = [-inf] * n
        cur = 1
        result[idxs[0]] = 1
        for i in range(1, n):
            if arr[idxs[i-1]] != arr[idxs[i]]:
                cur += 1
            result[idxs[i]] = cur
        return result