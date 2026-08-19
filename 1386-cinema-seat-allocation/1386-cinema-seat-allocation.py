class Solution:
    def maxNumberOfFamilies(self, n: int, reservedSeats: List[List[int]]) -> int:
        # reservedSeats.sort(key=lambda x: [x[0], x[1]])
        # print(reservedSeats)
        mem = dict()

        for r, s in reservedSeats:
            if r not in mem:
                mem[r] = dict()
            mem[r][s] = True

        result = n * 2
        for r in mem:
            seat2345 = True
            seat4567 = True
            seat6789 = True
            for s in mem[r]:
                if s in [2, 3]:
                    seat2345 = False
                elif s in [4, 5]:
                    seat2345 = False
                    seat4567 = False
                elif s in [6, 7]:
                    seat4567 = False
                    seat6789 = False
                elif s in [8, 9]:
                    seat6789 = False
            if seat2345 and seat6789:
                continue
            elif seat2345 or seat4567 or seat6789:
                result -= 1
            else:
                result -= 2

        return result
