class Solution:
    def missingInteger(self, nums: List[int]) -> int:
        n = len(nums)
        cur = nums[0]
        consist = True

        for i in range(1, n):
            if nums[i-1] + 1 == nums[i]:
                cur += nums[i]
            else:
                break
        
        while cur in set(nums):
            cur += 1
        return cur
        