class Solution:
    def sequentialDigits(self, low: int, high: int) -> List[int]:
        m = 123456789
        start = 9
        cur_len = len(str(low))
        result = []
        cur = 0
        while cur <= m and cur <= high:
            divider = start - cur_len
            cur = m % pow(10, start) // pow(10, divider)
            if low <= cur <= high:
                result.append(cur)
            # print(start, pow(10, start), cur, cur_len)
            start -= 1
            if divider == 0:
                cur_len += 1
                start = 9

        return result