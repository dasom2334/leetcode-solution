class Solution:
    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:
        less = []
        equal = []
        great = []
        n = len(nums)

        for i in range(n):
            if nums[i] > pivot:
                great.append(nums[i])
            elif nums[i] == pivot:
                equal.append(nums[i])
            else:
                less.append(nums[i])
        return less + equal + great