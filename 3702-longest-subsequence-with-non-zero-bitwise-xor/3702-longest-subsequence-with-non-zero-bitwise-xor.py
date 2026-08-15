class Solution:
    def longestSubsequence(self, nums: List[int]) -> int:
        n = len(nums)
        total = 0

        for i in range(n):
            total ^= nums[i]
        
        if total > 0:
            return n
        
        s = set(nums)

        if 0 in s and len(s) == 1:
            return 0
        
        return n - 1