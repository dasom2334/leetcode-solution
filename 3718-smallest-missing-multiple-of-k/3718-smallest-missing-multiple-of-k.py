class Solution:
    def missingMultiple(self, nums: List[int], k: int) -> int:
        n = len(nums)
        s = set(nums)

        for i in range(1, n + 1):
            if k * i not in s:
                return k * i
        return k * (n + 1)