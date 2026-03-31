class Solution:
    def generateString(self, str1: str, str2: str) -> str:
        n, m = len(str1), len(str2)
        word_len = n + m - 1
        
        lps = [0] * m
        j = 0
        for i in range(1, m):
            while j > 0 and str2[i] != str2[j]:
                j = lps[j - 1]
            if str2[i] == str2[j]:
                j += 1
                lps[i] = j

        word = [""] * word_len
        for i in range(n):
            if str1[i] == 'T':
                for k in range(m):
                    if word[i + k] != "" and word[i + k] != str2[k]:
                        return "" 
                    word[i + k] = str2[k]

        memo_state = {}
        def get_next_state(state, char):
            if (state, char) in memo_state:
                return memo_state[(state, char)]
            
            curr = state
            if curr == m: curr = lps[m - 1]
            while curr > 0 and char != str2[curr]:
                curr = lps[curr - 1]
            
            res = curr + 1 if char == str2[curr] else 0
            memo_state[(state, char)] = res
            return res

        dp = [[False] * (m + 1) for _ in range(word_len + 1)]
        for s in range(m + 1):
            dp[word_len][s] = True 

        for i in range(word_len - 1, -1, -1):
            for s in range(m + 1):
                candidates = [word[i]] if word[i] != "" else [chr(97 + k) for k in range(26)]
                
                for char in candidates:
                    ns = get_next_state(s, char)
                    
                    is_valid = True
                    if i >= m - 1:
                        start_idx = i - m + 1
                        cond = str1[start_idx]
                        if cond == 'T' and ns != m: is_valid = False
                        if cond == 'F' and ns == m: is_valid = False
                    
                    if is_valid and dp[i + 1][ns]:
                        dp[i][s] = True
                        break

        if not dp[0][0]:
            return ""

        result = []
        curr_s = 0
        for i in range(word_len):
            found = False
            candidates = [word[i]] if word[i] != "" else [chr(97 + k) for k in range(26)]
            
            for char in candidates:
                ns = get_next_state(curr_s, char)
                
                is_valid = True
                if i >= m - 1:
                    start_idx = i - m + 1
                    cond = str1[start_idx]
                    if cond == 'T' and ns != m: is_valid = False
                    if cond == 'F' and ns == m: is_valid = False
                
                if is_valid and dp[i + 1][ns]:
                    result.append(char)
                    curr_s = ns
                    found = True
                    break
            
            if not found: return ""

        return "".join(result)