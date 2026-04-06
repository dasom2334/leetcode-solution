class Solution:
    def robotSim(self, commands: List[int], obstacles: List[List[int]]) -> int:
        obs = set()
        obs.update(map(tuple, obstacles))

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
                for i in range(command):
                    x, y = position

                    x += turns[turn_pointer][0]
                    y += turns[turn_pointer][1]
                    # print(position, (x, y), obs) 
                    if (x, y) in obs:
                        break
                    position[0] = x
                    position[1] = y
                a, b = position
                result = max(result, a ** 2 + b ** 2)
        return result

