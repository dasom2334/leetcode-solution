class Solution:
    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:
        n = len(nums)
        if nums[start] == target:
            return 0

        s1 = start
        s2 = start
        for i in range(n):
            s1 -= 1
            s2 += 1
            if s1 >= 0 and nums[s1] == target:
                return abs(s1 - start)
            if s2 < n and nums[s2] == target:
                return abs(s2 - start)
        return 0
