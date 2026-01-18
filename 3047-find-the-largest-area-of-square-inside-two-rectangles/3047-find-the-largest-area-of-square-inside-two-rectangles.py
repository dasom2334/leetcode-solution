class Solution:
    def largestSquareArea(self, bottomLeft: List[List[int]], topRight: List[List[int]]) -> int:
        length = len(bottomLeft)
        max_len = 0
        for i in range(length):
            bottomLeft1 = bottomLeft[i]
            topRight1 = topRight[i]
            for j in range(i + 1, length):
                bottomLeft2 = bottomLeft[j]
                topRight2 = topRight[j]

                left   = max(bottomLeft[i][0], bottomLeft[j][0])
                right  = min(topRight[i][0],   topRight[j][0])
                bottom = max(bottomLeft[i][1], bottomLeft[j][1])
                top    = min(topRight[i][1],   topRight[j][1])

                if left >= right or bottom >= top:
                    continue

                max_len = max(max_len, min(right - left, top - bottom))

        return max_len ** 2