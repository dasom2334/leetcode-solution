class Robot:

    def __init__(self, width: int, height: int):
        self._width = width
        self._height = height
        self._circle_step = (self._width * 2) + (self._height * 2) - 4
        self._direction_idx = 0
        self._directions = ['East', 'North', 'West', 'South']
        self._direction_fixs = [
            [1, 0],
            [0, 1],
            [-1, 0],
            [0, -1],
        ]
        self._position = [0, 0]
    def get_step_limit(self, num: int):
        limit = num
        x, y = self._position
        if self._direction_idx == 0: 
            limit = self._width - x - 1
        if self._direction_idx == 1: 
            limit = self._height - y - 1
        if self._direction_idx == 2:
            limit = x
        if self._direction_idx == 3:
            limit = y
        return min(limit, num)


    def step(self, num: int) -> None:
        left_step = num % self._circle_step
        if left_step == 0:
            left_step = self._circle_step
        # print(num)
        while left_step > 0:
            x, y = self._position 
            step_limit = self.get_step_limit(left_step) 
            left_step = left_step - step_limit
            # print(step_limit, left_step)
            self._position = [
                x + (step_limit * self._direction_fixs[self._direction_idx][0]),
                y + (step_limit * self._direction_fixs[self._direction_idx][1])
            ]
            if left_step > 0:
                self._direction_idx = (self._direction_idx + 1) % 4
            # print(self._position, self._direction_idx, left_step, step_limit)

    def getPos(self) -> List[int]:
        return self._position

    def getDir(self) -> str:
        return self._directions[self._direction_idx]
        


# Your Robot object will be instantiated and called as such:
# obj = Robot(width, height)
# obj.step(num)
# param_2 = obj.getPos()
# param_3 = obj.getDir()