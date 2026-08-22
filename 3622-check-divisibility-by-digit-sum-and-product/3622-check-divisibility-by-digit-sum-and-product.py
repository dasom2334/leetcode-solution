class Solution:
    def checkDivisibility(self, n: int) -> bool:
        ints = list(map(int, str(n)))
        s = sum(ints)
        p = math.prod(ints)
        return n % (s + p) == 0