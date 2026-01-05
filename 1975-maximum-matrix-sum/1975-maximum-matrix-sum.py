class Solution(object):
    def maxMatrixSum(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: int
        """
        total = 0
        min_num = 10 ** 5
        minus_cnt = 0

        for col in matrix:
            for num in col:
                cur = abs(num)
                total += cur
                min_num = min(min_num, cur)
                if num < 0:
                    minus_cnt += 1
        
        if minus_cnt % 2 != 0:
            total -= 2 * min_num

        return total
        