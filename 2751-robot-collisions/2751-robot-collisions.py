# import copy

class Solution:
    def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
        stack = []
        health_map = dict(zip(positions, healths))
        direc_map = dict(zip(positions, directions))

        ordered_poss = sorted(positions)
        stack.append(ordered_poss[0])


        for i in range(1, len(ordered_poss)):
            stack.append(ordered_poss[i])
            while (len(stack) >= 2):
                pos = stack.pop()
                last = stack.pop()
                last_helth = health_map[last]
                last_direc = direc_map[last]
                cur_helth = health_map[pos]
                cur_direc = direc_map[pos]
                if last_direc == 'R' and cur_direc == 'L':
                    if last_helth == cur_helth:
                        health_map[last] = 0
                        health_map[pos] = 0
                        break
                    else: 
                        winner = last if last_helth > cur_helth else pos
                        loser = last if last_helth < cur_helth else pos
                        health_map[winner] -= 1
                        health_map[loser] = 0
                        stack.append(winner)
                else:
                    stack.append(last)
                    stack.append(pos)
                    break
        result = list(filter(lambda x: x > 0, map(lambda x: health_map[x], positions)))
        return result
