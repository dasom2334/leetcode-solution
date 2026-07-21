class Solution:
    def maxActiveSectionsAfterTrade(self, s: str) -> int:
        n = len(s)
        q = [1]

        cur = '1'
        max_zero_cnt = 0
        one_cnt = 0
        for i in range(n):
            if cur == s[i]:
                q[-1] += 1
            else:
                q.append(1)
            
            cur = s[i]
            if cur == '1':
                one_cnt += 1
            if cur == '1' and len(q) >= 4:
                zero_cnt = q[-4] + q[-2]
                max_zero_cnt = max(max_zero_cnt, zero_cnt)
        
        if cur == '0' and len(q) >= 4:
            zero_cnt = q[-3] + q[-1]
            max_zero_cnt = max(max_zero_cnt, zero_cnt)
        
        return max_zero_cnt + one_cnt
