class Solution:
    def findMissingElements(self, nums: List[int]) -> List[int]:
        s = set(nums)
        high = max(nums)
        cur = min(nums)
        result = []

        while cur < high:
            cur += 1
            if cur not in s:
                result.append(cur)          

        
        return result
