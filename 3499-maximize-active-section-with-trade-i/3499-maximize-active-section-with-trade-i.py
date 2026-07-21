class Solution:
    def maxActiveSectionsAfterTrade(self, s: str) -> int:
        n = len(s)
        cur = '1'
        max_zero_cnt = 0
        one_cnt = 0
        zero_prev_cnt = 0

        cur_cnt = 0
        for i in range(n):
            if cur == '0' and s[i] == '1': 
                if zero_prev_cnt > 0: 
                    zero_cnt = zero_prev_cnt + cur_cnt
                    max_zero_cnt = max(max_zero_cnt, zero_cnt)
                zero_prev_cnt = cur_cnt
            if cur == s[i]:
                cur_cnt += 1
            else:
                cur_cnt = 1
            cur = s[i]
            if cur == '1':
                one_cnt += 1
            
        if cur == '0' and zero_prev_cnt > 0:
            zero_cnt = zero_prev_cnt + cur_cnt
            max_zero_cnt = max(max_zero_cnt, zero_cnt)
        return max_zero_cnt + one_cnt
