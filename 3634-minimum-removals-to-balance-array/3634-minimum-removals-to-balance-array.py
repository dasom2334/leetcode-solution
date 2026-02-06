class Solution:
    def minRemoval(self, nums: List[int], k: int) -> int:
        sortedNums = sorted(nums)
        length = len(nums)
        cnt = length
        r = 0
        for l in range(length):
            while r < length and sortedNums[l] * k >= sortedNums[r]:
                
                r += 1
            cnt = min(cnt, length - (r - l))
            
        return cnt

        