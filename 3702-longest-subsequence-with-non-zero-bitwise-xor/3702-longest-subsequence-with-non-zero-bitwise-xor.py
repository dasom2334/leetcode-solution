class Solution:
    def longestSubsequence(self, nums: List[int]) -> int:
        n = len(nums)
        total = 0
        not_only_zero = True

        for i in range(n):
            total ^= nums[i]
            if nums[i] > 0:
                not_only_zero = False
        
        if total > 0:
            return n
        
        if not_only_zero:
            return 0
        
        return n - 1