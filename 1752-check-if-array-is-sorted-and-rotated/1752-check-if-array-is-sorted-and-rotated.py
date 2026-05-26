class Solution:
    def check(self, nums: List[int]) -> bool:
        n = len(nums)
        down_cnt = 0
        cur_min = nums[0]
        for i in range(1, n):
            if nums[i - 1] > nums[i]:
                down_cnt += 1
            if down_cnt > 1:
                return False

            if down_cnt == 1 and cur_min < nums[i]:
                return False
        return True 