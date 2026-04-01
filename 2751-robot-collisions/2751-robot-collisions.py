# import copy

class Solution:
    def survivedRobotsHealths(self, positions: List[int], healths: List[int], directions: str) -> List[int]:
        stack = []
        ordered_poss_idxs = sorted(range(len(positions)), key=lambda x: positions[x])
        stack.append(ordered_poss_idxs[0])

        for i in range(1, len(ordered_poss_idxs)):
            stack.append(ordered_poss_idxs[i])
            while (len(stack) >= 2):
                pos = stack.pop()
                last = stack.pop()
                last_health = healths[last]
                last_direc = directions[last]
                cur_health = healths[pos]
                cur_direc = directions[pos]
                if last_direc == 'R' and cur_direc == 'L':
                    if last_health == cur_health:
                        healths[last] = 0
                        healths[pos] = 0
                        break
                    else: 
                        winner = last if last_health > cur_health else pos
                        loser = last if last_health < cur_health else pos
                        healths[winner] -= 1
                        healths[loser] = 0
                        stack.append(winner)
                else:
                    stack.append(last)
                    stack.append(pos)
                    break
        result = list(filter(lambda x: x > 0, map(lambda x: healths[x], sorted(ordered_poss_idxs))))
        return result
