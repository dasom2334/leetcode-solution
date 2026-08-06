class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        cur = n

        while cur <= 100:
            c = cur
            prod = 1
            while c > 0:
                prod *= c % 10
                c //= 10
            if prod % t == 0:
                return cur
            cur += 1
        return cur