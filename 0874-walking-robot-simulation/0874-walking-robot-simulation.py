from collections import defaultdict
from bisect import bisect_left, bisect_right

class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        xs_by_y = defaultdict(list)
        ys_by_x = defaultdict(list)
        for x, y in sorted(obstacles):
            xs_by_y[x].append(y)
            ys_by_x[y].append(x)

        turns = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ]
        turn_pointer = 0
        position = [0, 0]
        result = 0

        for command in commands:
            if command == -1:
                turn_pointer = (turn_pointer + 1) % 4
            elif command == -2:
                turn_pointer = (turn_pointer - 1) % 4
            else:
                x, y = position
                need_left = turn_pointer == 2 or turn_pointer == 3
                need_x = turn_pointer == 0 or turn_pointer == 2
                bs = bisect_left if need_left else bisect_right
                obstacles_by_move = xs_by_y[x] if need_x else ys_by_x[y]
                base_point = position[1] if need_x else position[0]
                obstacle = bs(obstacles_by_move, base_point)
                # print(
                #     x, y,
                #     position,
                #     obstacle, 
                #     base_point, 
                #     obstacles_by_move,
                #     obstacles_by_move[obstacle] if obstacle < len(obstacles_by_move) else 'hihi'
                # )
                x += turns[turn_pointer][0] * command
                y += turns[turn_pointer][1] * command
                if need_left:
                    obstacle -= 1
                if 0 <= obstacle < len(obstacles_by_move):
                    obs = obstacles_by_move[obstacle]
                    if need_x:
                        target = y
                        if need_left:
                            y = obs + 1 if obs >= target else target
                        else:
                            y = obs - 1 if obs <= target else target

                    else:
                        target = x
                        if need_left:
                            x = obs + 1 if obs >= target else target
                        else:
                            x = obs - 1 if obs <= target else target
                position[0] = x
                position[1] = y
                a, b = position
                result = max(result, a ** 2 + b ** 2)
        return result

