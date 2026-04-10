class Solution:
    def minimumDistance(self, nums: List[int]) -> int:
        result_half = float(inf)
        n = len(nums)

        for i in range(n - 2):
            has_mid = False
            for j in range(i + 1, n):
                if j - i > result_half:
                    break
                if nums[i] == nums[j]:
                    if has_mid:
                        result_half = min(result_half, j - i)
                        break
                    else:
                        has_mid = True
                
        return -1 if result_half >= n else result_half * 2
                