class Solution:
    def smallestNumber(self, num: str, t: int) -> str:
        primes = {
            '2': 0, '3': 0, '5': 0, '7': 0
        }
        cur_t = t
        while cur_t > 1:
            has_p = False
            for p in [2, 3, 5, 7]:
                if cur_t % p == 0:
                    cur_t //= p
                    has_p = True
                    primes[str(p)] += 1
                    break
            if not has_p:
                return "-1"
        
        cnts = Counter(num)

        def cur_cnts_diff_primes(cnts):
            cur_cnts = {
                '2': cnts['2'] + cnts['4'] * 2 + cnts['6'] + cnts['8'] * 3,
                '3': cnts['3'] + cnts['6'] + cnts['9'] * 2,
                '5': cnts['5'],
                '7': cnts['7'],
            }
            for p in ['2', '3', '5', '7']:
                cur_cnts[p] -= primes[p]
            return cur_cnts

        n = len(num)
        cnts = Counter(num)
        if cnts['0'] == 0 and all(v >= 0 for v in cur_cnts_diff_primes(cnts).values()):
            return num

        n = len(num)
        result = list(num)
        def fill(cnts, free):
            out = []
            while True:
                diff = cur_cnts_diff_primes(cnts)
                if all(v >= 0 for v in diff.values()):
                    break
                if len(out) == free:
                    return None
                if diff['3'] <= -2:
                    c = '9'
                elif diff['2'] <= -3:
                    c = '8'
                elif diff['7'] <= -1:
                    c = '7'
                elif diff['2'] <= -1 and diff['3'] <= -1:
                    c = '6'
                elif diff['5'] <= -1:
                    c = '5'
                elif diff['2'] <= -2:
                    c = '4'
                elif diff['3'] <= -1:
                    c = '3'
                else:
                    c = '2'
                out.append(c)
                cnts[c] += 1
            return '1' * (free - len(out)) + ''.join(reversed(out))

        fz = num.find('0')
        start = fz if fz != -1 else n - 1

        pre = Counter(num[:start])
        for i in range(start, -1, -1):
            for d in range(int(num[i]) + 1, 10):
                pre[str(d)] += 1
                suf = fill(pre.copy(), n - 1 - i)
                pre[str(d)] -= 1
                if suf is not None:
                    return num[:i] + str(d) + suf
            if i > 0:
                pre[num[i - 1]] -= 1

        L = n + 1
        while True:
            suf = fill(Counter(), L)
            if suf is not None:
                return suf
            L += 1