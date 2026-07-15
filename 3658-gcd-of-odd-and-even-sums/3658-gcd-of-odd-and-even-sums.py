class Solution:
    def gcdOfOddEvenSums(self, n: int) -> int:
        sum_odd = 0
        sum_even = 0
        for i in range(n):
            sum_odd += (i * 2) + 1
            sum_even += (i * 2) + 2
        return math.gcd(sum_odd, sum_even)