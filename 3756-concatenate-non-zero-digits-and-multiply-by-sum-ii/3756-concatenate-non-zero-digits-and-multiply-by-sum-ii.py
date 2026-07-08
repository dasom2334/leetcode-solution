class Solution:
    def sumAndMultiply(self, s: str, queries: List[List[int]]) -> List[int]:
        sum_s = []
        x_s = []
        cur_d_cnts = []
        mod = 10 ** 9 + 7

        cur_x = 0
        cur_sum = 0
        cur_d_cnt = 0
        for c in s:
            if c != '0':
                int_c = int(c)
                cur_sum = (cur_sum + int_c) % mod
                cur_x = ((cur_x * 10) + int_c) % mod
                cur_d_cnt += 1

            sum_s.append(cur_sum)
            x_s.append(cur_x)
            cur_d_cnts.append(cur_d_cnt)

        result = []
        for si, ei in queries:
            ss = sum_s[ei]
            sx = x_s[ei]
            if si > 0:
                ss -= sum_s[si - 1]
                sx -= x_s[si - 1] * pow(10, cur_d_cnts[ei] - cur_d_cnts[si - 1], mod)
            result.append(ss * sx % mod)
        return result


