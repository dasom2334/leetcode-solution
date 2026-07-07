class Solution:
    def sumAndMultiply(self, n: int) -> int:
        arr = []
        cur = n
        while cur > 0:
            d = cur % 10
            if d != 0:
                arr.append(cur % 10)
            cur //= 10
        if len(arr) == 0:
            return 0
        arr.reverse()
        nz_digit = int(''.join(list(map(str, arr))))
        sum_digit = sum(arr)
        return nz_digit * sum_digit
        