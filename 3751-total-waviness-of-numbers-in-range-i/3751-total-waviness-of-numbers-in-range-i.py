class Solution:
    def totalWaviness(self, num1: int, num2: int) -> int:
        calc_map = {}
        def calc_waviness(num: int):
            if num > 1000:
                raise ValueError()
            num1 = (num // 100) * 100
            num2 = ((num - num1) // 10) * 10
            num3 = num - num1 - num2
            num1 //= 100
            num2 //= 10
            peak = num1 < num2 > num3
            valley = num1 > num2 < num3
            return 1 if peak or valley else 0

        def get_waviness(num: int):
            if num < 100:
                return 0
            if num in calc_map:
                return calc_map[num]
            if num < 1000:
                calc_map[num] = calc_waviness(num)
                return calc_map[num]
            pre = get_waviness(num // 10)
            cur = calc_waviness(num % 1000)
            calc_map[num] = pre + cur
            return pre + cur
        
        waviness = 0
        for i in range(num1, num2 + 1):
            waviness += get_waviness(i)
        return waviness