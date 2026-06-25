class Solution:
    def countMajoritySubarrays(self, nums: List[int], target: int) -> int:
        n = len(nums)
        prefix = [0] * (n + 1)
        result = 0
        cur = 0
        for i in range(n):
            if nums[i] == target:
                cur += 1
            prefix[i] = cur
            for j in range(i + 1):
                sub_sum = prefix[i] - prefix[j - 1]
                limit = ((i - j + 1) // 2)
                if (0 < limit < sub_sum) or (i == j and nums[i] == target):
                    result += 1 
        return result