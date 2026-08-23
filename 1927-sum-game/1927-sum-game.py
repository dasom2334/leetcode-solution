class Solution:
    def sumGame(self, num: str) -> bool:
        ls, rs, lq, rq = 0, 0, 0, 0
        n = len(num)
        h = n // 2
        for i in range(n):
            if num[i] == '?':
                if h > i:
                    lq += 1
                else:
                    rq += 1
            else:
                numb = int(num[i])
                if h > i:
                    ls += numb
                else:
                    rs += numb

        if (lq + rq) % 2 == 1:
            return True


        return ls - rs != (rq - lq) * 9 // 2
