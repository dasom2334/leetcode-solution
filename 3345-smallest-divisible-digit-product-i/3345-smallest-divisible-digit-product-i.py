class Solution:
    def smallestNumber(self, n: int, t: int) -> int:
        digits = list(map(int, list(str(n))))
        print(digits)

        while True:
            p = math.prod(digits)
            if p % t == 0:
                return int("".join(list(map(str, digits))))
            digits[-1] += 1
            for i in range(1, len(digits) + 1):
                if digits[-i] >= 10:
                    if len(digits) >= (i + 1):
                        digits[-(i + 1)] += 1
                    else: 
                        digits = [1] + digits
                    digits[-i] = 0


        return int("".join(list(map(str, digits))))