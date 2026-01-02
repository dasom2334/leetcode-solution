class Solution(object):
    def repeatedNTimes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        targetCnt = len(nums) / 2
        map = dict()
        for num in nums:
            if num not in map:
                map[num] = 0

            map[num] += 1

            if map[num] == targetCnt:
                return num
        return 0
        