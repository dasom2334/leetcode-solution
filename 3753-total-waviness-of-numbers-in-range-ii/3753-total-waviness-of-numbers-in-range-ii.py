class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        from functools import lru_cache

        def get_waviness(num: int):
            disits = list(map(int, str(num)))
            n = len(disits)
            @lru_cache(maxsize=None)
            def dp(pos: int, pre1: int, pre2: int, tight: bool, started: bool, length: int):
                if pos == n:
                    return (1, 0)
                limit = disits[pos] if tight else 9
                result = 0
                cnt = wav = 0
                for i in range(0, limit + 1):
                    nt = tight and i == limit
                    new_started = started or i > 0
                    new_len = (length + 1) if new_started else 0
                    np1, np2 = pre1, pre2

                    c, w = dp(pos + 1, np2, i, nt, new_started, new_len)

                    if length > 1:
                        full = pre1 != -1 and pre2 != -1
                        peak = pre1 < pre2 > i
                        valley = pre1 > pre2 < i
                        if full and (peak or valley):
                            w += c

                    cnt += c
                    wav += w
                return (cnt, wav)
            return dp(0, -1, -1, True, False, 0)[1]
        return get_waviness(num2) - get_waviness(num1 - 1)